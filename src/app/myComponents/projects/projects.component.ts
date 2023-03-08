import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/myServices/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { project } from 'src/app/model/datatypes';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { CoreService } from 'src/app/myServices/core.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'projectName', 'category', 'summary', 'action'];
  dataSource!: MatTableDataSource<project>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private projectService: ProjectService, private dialog: MatDialog, private _coreService: CoreService) { }

  ngOnInit(): void {
    // this.getProjectList();

    this.projectService.refresh.subscribe(() => {
      this.getProjectList();
    });


    this.getProjectList();

  }

  getProjectList() {
    this.projectService.getProjectList().subscribe((res: project[]) => {
      // console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, (err) => {
      console.log(err);

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProject(id: number) {

    alertify.confirm("Delete Project", "Are you sure to delete the project?", () => {
      this.projectService.deleteProject(id).subscribe((res) => {
        this.getProjectList();
      });
      this._coreService.openSnackBar('project deleted successfully!');

    }, () => { });
    
    // if (confirm('Are you sure to delete the project?')) {
    //   this.projectService.deleteProject(id).subscribe((res) => {
    //     // alert('project deleted successfully..');
    //     this._coreService.openSnackBar('project deleted successfully!');
    //     this.getProjectList();
    //   });
    // }

  }

  updateProject(data: project) {
    this.dialog.open(ProjectDialogComponent, {
      data: data
    });
  }

}
