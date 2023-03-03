import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../model/datatypes';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/tasks';
  }

  addTask(data: any) {
    return this.http.post<todo>(this.baseUrl, data);
  }

  getAllTasks() {
    return this.http.get(this.baseUrl);
  }

  getTaskById(id: number) {
    return this.http.get<todo>(this.baseUrl + '/' + id);
  }

  deleteTaskById(id: number): Observable<todo> {
    return this.http.delete<todo>(this.baseUrl + '/' + id);
  }

  updateTask(id: number, tododata: any): Observable<todo> {
    return this.http.put<todo>(this.baseUrl + '/' + id, tododata);
  }
}
