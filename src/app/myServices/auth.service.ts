import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { login, signup } from '../model/datatypes';

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
        localStorage.setItem('user', JSON.stringify(res.body));
        this.router.navigate(['dashboard']);
        alert('signup successfull!');
      });
  }

  reloadUser() {
    if (localStorage.getItem('user')) {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['dashboard']);
    }
  }

  userLogin(data: login) {
    // console.log((data));
    this.http.get<login>(`http://localhost:3000/signupUsers?email=${data.email}&password=${data.password}`,
      { observe: 'response' })
      .subscribe((res: any) => {
        // console.log(res);
        if (res && res.body && res.body.length) {
          // console.log('user logged in'); 
          localStorage.setItem('user', JSON.stringify(res.body));
          this.router.navigate(['dashboard']);
          alert('Login successful!');
        }
        else {
          // console.log('login failed..');  
          alert('User not found!!');
        }

      }, (err) => {
        alert('Something went wrong!!');
      });
  }
}
