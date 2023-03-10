import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/model/datatypes';
import { AuthService } from 'src/app/myServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    // console.log(data);
    this.authService.userLogin(this.loginForm.value);
  }

  // login() {
  //   this.http.get<any>('http://localhost:3000/signupUsers')
  //     .subscribe((res) => {
  //       const user = res.find((a: any) => {
  //         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
  //       });
  //       if (user) {
  //         alert('Login successful!');
  //         this.loginForm.reset();
  //         this.router.navigate(['dashboard']);
  //       }
  //       else {
  //         alert('user not found!');
  //       }
  //     }, (err) => {
  //       alert('Something went wrong!');
  //     });
}


