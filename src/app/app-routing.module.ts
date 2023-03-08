import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './myComponents/board/board.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { LoginComponent } from './myComponents/login/login.component';
import { PageNotFoundComponent } from './myComponents/page-not-found/page-not-found.component';
import { ProjectsComponent } from './myComponents/projects/projects.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { SingleProjectComponent } from './myComponents/single-project/single-project.component';
import { YourWorkComponent } from './myComponents/your-work/your-work.component';
import { AuthGuardGuard } from './myGuards/auth-guard.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard] },
  { path: 'your-work', component: YourWorkComponent, canActivate: [AuthGuardGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate:[AuthGuardGuard] },
  { path: 'projects/:projectId', component: SingleProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
