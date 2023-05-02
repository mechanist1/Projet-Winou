import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService
  ) { }

  signin(): void {
    const data2 = {
      email: this.email,
      pwd: this.password,
    };
  console.log("signin")
    this.http.post('http://127.0.0.1:3000/signin', data2).subscribe(
      (response: any) => {
        console.log()
        console.log('HTTP request successful:', response);
        const token = response.t;
        localStorage.setItem('token', token);
        const exists = localStorage.getItem('token')
        if (exists) {
          this.sharedService.setLoggedIn(true); // set the value of loggedin to true
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log('HTTP request error:', error);
      }
    );
  }
  

  ngOnInit(): void {

  }
}   
