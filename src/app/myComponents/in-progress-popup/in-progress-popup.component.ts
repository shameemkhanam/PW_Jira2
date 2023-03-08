import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { todo } from 'src/app/model/datatypes';
import * as alertify from 'alertifyjs';
import { InProgressService } from 'src/app/myServices/in-progress.service';

@Component({
  selector: 'app-in-progress-popup',
  templateUrl: './in-progress-popup.component.html',
  styleUrls: ['./in-progress-popup.component.css']
})
export class InProgressPopupComponent implements OnInit {

  editDataInProgress: todo;

  constructor(private _fb: FormBuilder,
    private inProgressService: InProgressService,
    private todoDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.inProgressService.getTaskById(this.data.id).subscribe((res) => {
        this.editDataInProgress = res;
        // this.todoForm.setValue({id:this.editData.id,description: this.editData.description});
        this.inProgressTodoForm.patchValue(res);
      });
    }
  }

  inProgressTodoForm = this._fb.group({
    description: ['', Validators.required]
  });

  saveTodo() {
    if (this.inProgressTodoForm.valid) {
      // console.log(this.todoForm.value);

      if (this.data.id) {
        this.inProgressService.updateTask(this.data.id, this.inProgressTodoForm.getRawValue()).subscribe((res) => {
          this.closeTodoPopup();
          alertify.success('task updated successfully!');
        });
      }
      else {
        this.inProgressService.addTask(this.inProgressTodoForm.value).subscribe((res) => {
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
