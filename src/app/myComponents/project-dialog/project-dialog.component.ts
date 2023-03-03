import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { project } from 'src/app/model/datatypes';
import { CoreService } from 'src/app/myServices/core.service';
import { ProjectService } from 'src/app/myServices/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  projectDialogForm!: FormGroup;

  constructor(private _fb: FormBuilder,
    private projectService: ProjectService,
    private _dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: project,
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.projectDialogForm = this._fb.group({
      projectName: ['', Validators.required],
      key: [''],
      type: ['', Validators.required],
      // task: [''],
      // inProgress: [''],
      // done:[''],
      summary: ['']
    });

    this.projectDialogForm.patchValue(this.data);
  }

  onDialogFormSubmit() {
    if (this.projectDialogForm.valid) {
      // console.log(this.projectDialogForm.value);
      if (this.data) {
        this.projectService.updateProject(this.data.id, this.projectDialogForm.value).subscribe((res) => {
          // alert('project details updated!');
          this._coreService.openSnackBar('project details updated!', 'Done');
          this._dialogRef.close(true);
        }, (err) => {
          alert('error');
        });
      }
      else {
        this.projectService.addProject(this.projectDialogForm.value).subscribe((res) => {
          // alert('project added successfully..');
          this._coreService.openSnackBar('project added successfully!', 'Done');
          this._dialogRef.close(true);
        }, (err) => {
          alert('error');
        });
      }

    }

  }

}
