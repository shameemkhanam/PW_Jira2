import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/model/datatypes';
import { ProjectService } from 'src/app/myServices/project.service';

@Component({
  selector: 'app-your-work',
  templateUrl: './your-work.component.html',
  styleUrls: ['./your-work.component.css']
})
export class YourWorkComponent implements OnInit{

  projectList: project[];

  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.projectService.getProjectList().subscribe((res:project[]) => {
      this.projectList = res;
    });
  }

}
