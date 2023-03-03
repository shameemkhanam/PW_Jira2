import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { project, todo } from 'src/app/model/datatypes';
import { ProjectService } from 'src/app/myServices/project.service';
import { TaskService } from 'src/app/myServices/task.service';
import { BoardPopupComponent } from '../board-popup/board-popup.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  projectData!: project;
  todoData!: todo[];

  constructor(private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService,
    private _fb: FormBuilder,
    private todoDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      // console.log(param['projectId']);
      let projectId = param.get('projectId');

      projectId && this.projectService.getProjectById(projectId).subscribe((res) => {
        // console.log(res);
        this.projectData = res;
      });
    });

    this.loadTodo();
  }

  openPopup(id: any) {
    const _popup = this.todoDialog.open(BoardPopupComponent, {
      width: '500px',
      data: {
        id: id
      }
    });

    _popup.afterClosed().subscribe((r) => {
      this.loadTodo();
    });
  }

  loadTodo() {
    this.taskService.getAllTasks().subscribe((res: todo[]) => {
      this.todoData = res;
    });
  }

  editTodo(id: number) {
    this.openPopup(id);
  }


}
