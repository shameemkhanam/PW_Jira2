import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { ProjectService } from 'src/app/myServices/project.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private dialog: MatDialog, private projectService:ProjectService) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(ProjectDialogComponent);

    dialogRef.afterClosed().subscribe((res) => {
      // console.log(`Dialog result: ${result}`);
      if (res) {
        this.projectService.getProjectList().subscribe((res) => {
          console.log(res);
        });
      }
    });
  }
  

}
