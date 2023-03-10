import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { todo } from 'src/app/model/datatypes';
import { TaskService } from 'src/app/myServices/task.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-board-popup',
  templateUrl: './board-popup.component.html',
  styleUrls: ['./board-popup.component.css']
})
export class BoardPopupComponent implements OnInit {

  editData: todo;

  constructor(private _fb: FormBuilder,
    private taskService: TaskService,
    private todoDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.taskService.getTaskById(this.data.id).subscribe((res) => {
        this.editData = res;
        // this.todoForm.setValue({id:this.editData.id,description: this.editData.description});
        this.todoForm.patchValue(res);
      });
    }
  }

  todoForm = this._fb.group({
    description: ['', Validators.required]
  });

  saveTodo() {
    if (this.todoForm.valid) {
      // console.log(this.todoForm.value);

      if (this.data.id) {
        this.taskService.updateTask(this.data.id, this.todoForm.getRawValue()).subscribe((res) => {
          this.closeTodoPopup();
          alertify.success('task updated successfully!');
        });
      }
      else {
        this.taskService.addTask(this.todoForm.value).subscribe((res) => {
          this.closeTodoPopup();
          alertify.success('task saved successfully!');
        });
      }

    }
  }

  closeTodoPopup() {
    this.todoDialog.closeAll();
  }

}
