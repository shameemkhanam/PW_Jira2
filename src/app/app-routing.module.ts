import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './myComponents/board/board.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { PageNotFoundComponent } from './myComponents/page-not-found/page-not-found.component';
import { ProjectsComponent } from './myComponents/projects/projects.component';
import { SingleProjectComponent } from './myComponents/single-project/single-project.component';
import { YourWorkComponent } from './myComponents/your-work/your-work.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'your-work', component: YourWorkComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:projectId', component: SingleProjectComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
