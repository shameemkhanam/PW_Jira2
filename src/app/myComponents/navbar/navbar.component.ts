import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/myServices/auth.service';

import { ProjectService } from 'src/app/myServices/project.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuType: string = 'default';
  username: string;

  constructor(private dialog: MatDialog, private projectService: ProjectService, private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      // console.log(val.url);
      if (val.url) {
        if (localStorage.getItem('user')) {
          // console.warn('in user area');  
          this.menuType = 'user';
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)[0];
          this.username = userData.fullName;
        }
        else {
          // console.warn('outside user area');
          this.menuType = 'default';
        }
      }

    });

    // if (localStorage.getItem('user')) {
    //   let userStore = localStorage.getItem('user');
    //   let userData = userStore && JSON.parse(userStore)[0];
    //   this.username = userData.fullName;
    // }

  }


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

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }


}
