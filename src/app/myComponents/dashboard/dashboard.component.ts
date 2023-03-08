import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/model/datatypes';
import { ProjectService } from 'src/app/myServices/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projectList: project[];

  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.projectService.getProjectList().subscribe((res:project[]) => {
      this.projectList = res;
    });
  }


}
