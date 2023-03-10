import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/myServices/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullName:[''],
      mobile:[''],
      email:[''],
      password:[''],
      cpassword:['']
    });

    this.authService.reloadUser();
  }

  signup() {
    this.authService.usersignup(this.signupForm.value);
    this.signupForm.reset();


    // this.authService.usersignup(this.signupForm.value).subscribe((res) => {
    //     alert('signup successfull!');
    //     this.signupForm.reset();
    //     this.router.navigate(['login']);
    //   }, (err) => {
    //     alert('something went wrong!');
    //   });
  }
}
