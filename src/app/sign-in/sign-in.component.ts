import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email:string="";
  password:string="";
  

  constructor(private http: HttpClient){}
  
   
  signin(): void{
    const data2={
      emaillogin: this.email,
      pwdlogin: this.password,
    };
    

    this.http.post('http://127.0.0.1:3000/signin',data2).subscribe(
      (Response)=>{
        console.log(Response);
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
  
  ngOnInit(): void {
      
  }
}


