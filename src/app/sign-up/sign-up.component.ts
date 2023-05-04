  import { Component,OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Route,Router } from '@angular/router';
  import { Token } from '@angular/compiler';
  import { SharedService } from '../shared.service';

  @Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
  })
  export class SignUpComponent implements OnInit {
    
    username:string="";
    email:any="";
    pwd:string="";
    pwdagain:string="";




    constructor(private http: HttpClient,
      private route:Router,
      private sharedService:SharedService){}

    
      signup() : void{

        const data1={
          username:this.username,
          email:this.email,
          pwd:this.pwd,
          pwdagain:this.pwdagain
        };
        
    
        

        this.http.post('http://127.0.0.1:3000/signup',data1).subscribe(
          (Response :any)=>{
            const token = Response.to;
            console.log("hello");
            localStorage.setItem('token',token);
           

          
            console.log(Response);
          }, 
          (error)=>{
            console.log(error);
          }
        )
        this.route.navigate(['/']);

      


    }
    ngOnInit(): void {
      const exist =localStorage.getItem('token');
      if(exist){
        console.log(this.sharedService.getisLoggedIn());
        this.sharedService.setLoggedIn(true);
        
        const decodedToken = JSON.parse(atob(exist.split('.')[1]));
        const user = decodedToken.username;
        
        this.sharedService.setuser(user);
        console.log(this.sharedService.getisLoggedIn());
  
        console.log("cbon",exist);
      }
      else{
        console.log("mouch cbon")
      }

  }}
