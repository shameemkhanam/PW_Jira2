import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { project } from 'src/app/model/datatypes';
import { ProjectService } from 'src/app/myServices/project.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  projectData: project;

  constructor(private projectService: ProjectService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      // console.log(param['projectId']);
      let projectId = param.get('projectId');

      projectId && this.projectService.getProjectById(projectId).subscribe((res) => {
        // console.log(res);
        this.projectData = res;
      });
    });
  }
}
