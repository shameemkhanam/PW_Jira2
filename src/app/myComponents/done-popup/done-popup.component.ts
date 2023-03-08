import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { todo } from 'src/app/model/datatypes';
import * as alertify from 'alertifyjs';
import { DoneService } from 'src/app/myServices/done.service';

@Component({
  selector: 'app-done-popup',
  templateUrl: './done-popup.component.html',
  styleUrls: ['./done-popup.component.css']
})
export class DonePopupComponent implements OnInit {

  editDataDone: todo;

  constructor(private _fb: FormBuilder,
    private doneService: DoneService,
    private todoDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data) {
      this.doneService.getTaskById(this.data.id).subscribe((res) => {
        this.editDataDone = res;
        // this.todoForm.setValue({id:this.editData.id,description: this.editData.description});
        this.DoneTodoForm.patchValue(res);
      });
    }
  }

  DoneTodoForm = this._fb.group({
    description: ['', Validators.required]
  });

  saveTodo() {
    if (this.DoneTodoForm.valid) {
      // console.log(this.todoForm.value);

      if (this.data.id) {
        this.doneService.updateTask(this.data.id, this.DoneTodoForm.getRawValue()).subscribe((res) => {
          this.closeTodoPopup();
          alertify.success('task updated successfully!');
        });
      }
      else {
        this.doneService.addTask(this.DoneTodoForm.value).subscribe((res) => {
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
