import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { project, todo } from 'src/app/model/datatypes';
import { ProjectService } from 'src/app/myServices/project.service';
import { TaskService } from 'src/app/myServices/task.service';
import { BoardPopupComponent } from '../board-popup/board-popup.component';
import * as alertify from 'alertifyjs';
import { InProgressService } from 'src/app/myServices/in-progress.service';
import { DoneService } from 'src/app/myServices/done.service';
import { InProgressPopupComponent } from '../in-progress-popup/in-progress-popup.component';
import { DonePopupComponent } from '../done-popup/done-popup.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  projectData!: project;
  todoData!: todo[];
  inProgressData!: todo[];
  doneData!: todo[];

  constructor(private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService,
    private inProgressService: InProgressService,
    private doneService: DoneService,
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
    this.inProgressService.getAllTasks().subscribe((res: todo[]) => {
      this.inProgressData = res;
    });
    this.doneService.getAllTasks().subscribe((res: todo[]) => {
      this.doneData = res;
    });
  }

  editTodo(id: number) {
    this.openPopup(id);
  }

  deleteTask(id: number) {
    alertify.confirm("Remove task", "do you want to remove this task?", () => {
      this.taskService.deleteTaskById(id).subscribe((res) => {
        this.loadTodo();
      });
      alertify.success("deleted task!");
    }, () => { });

  }

  // in progress
  openInProgressPopup(id: any) {
    const _popup2 = this.todoDialog.open(InProgressPopupComponent, {
      width: '500px',
      data: {
        id: id
      }
    });

    _popup2.afterClosed().subscribe((r) => {
      this.loadTodo();
    });
  }

  editInProgressTodo(id: number) {
    this.openInProgressPopup(id);
  }

  deleteInProgressTask(id: number) {
    alertify.confirm("Remove task", "do you want to remove this task?", () => {
      this.inProgressService.deleteTaskById(id).subscribe((res) => {
        this.loadTodo();
      });
      alertify.success("deleted task!");
    }, () => { });
  }

  //done
  openDonePopup(id: any) {
    const _popup3 = this.todoDialog.open(DonePopupComponent, {
      width: '500px',
      data: {
        id: id
      }
    });

    _popup3.afterClosed().subscribe((r) => {
      this.loadTodo();
    });
  }

  editDoneTodo(id: number) {
    this.openDonePopup(id);
  }

  deleteDoneTask(id: number) {
    alertify.confirm("Remove task", "do you want to remove this task?", () => {
      this.doneService.deleteTaskById(id).subscribe((res) => {
        this.loadTodo();
      });
      alertify.success("deleted task!");
    }, () => { });
  }

  drop(event: CdkDragDrop<todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
