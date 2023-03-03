import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { SidebarComponent } from './myComponents/sidebar/sidebar.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { DashboardComponent } from './myComponents/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './myComponents/page-not-found/page-not-found.component';
import { YourWorkComponent } from './myComponents/your-work/your-work.component';
import { ProjectsComponent } from './myComponents/projects/projects.component';
import { SingleProjectComponent } from './myComponents/single-project/single-project.component';
import { BoardComponent } from './myComponents/board/board.component';
import { ProjectDialogComponent } from './myComponents/project-dialog/project-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardPopupComponent } from './myComponents/board-popup/board-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    YourWorkComponent,
    ProjectsComponent,
    SingleProjectComponent,
    BoardComponent,
    ProjectDialogComponent,
    BoardPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
