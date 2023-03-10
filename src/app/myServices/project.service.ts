import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { project } from '../model/datatypes';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _refresh = new Subject();

  constructor(private http: HttpClient) { }

  get refresh() {
    return this._refresh;
  }

  // addProject(data: any) {
  //   return this.http.post('http://localhost:3000/projects', data);
  // }
  addProject(data: any) {
    return this.http.post('http://localhost:3000/projects/', data)
      .pipe(
        (tap(() => {
          this._refresh.next(true);
        }))
      )
  }

  updateProject(id: number, data: project) {
    return this.http.put(`http://localhost:3000/projects/${id}`, data)
      .pipe(
        (tap(() => {
          this._refresh.next(true);
        }))
      )
  }

  getProjectList() {
    return this.http.get('http://localhost:3000/projects');
  }

  deleteProject(id: number) {
    return this.http.delete(`http://localhost:3000/projects/${id}`);
  }

  getProjectById(id: string) {
    return this.http.get<project>(`http://localhost:3000/projects/${id}`);
  }

}
