import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { signup } from '../model/datatypes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  usersignup(data: signup) {
    this.http.post<signup>('http://localhost:3000/signupUsers', data, { observe: 'response' })
      .subscribe((res) => {
        this.isUserLoggedIn.next(true);
        localStorage.setItem('User', JSON.stringify(res.body));
        this.router.navigate(['dashboard']);
        alert('signup successfull!');
      });
  }

  reloadUser() {
    if (localStorage.getItem('User')) {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['dashboard']);
    }
  }
}
