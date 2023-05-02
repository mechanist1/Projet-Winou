import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route,Router } from '@angular/router';
import { Token } from '@angular/compiler';
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




  constructor(private http: HttpClient,private route:Router){}

   
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
          this.route.navigate(['/'])

        
          console.log(Response);
        }, 
        (error)=>{
          console.log(error);
        }
      )
   
    


  }
  ngOnInit(): void {
      
  }

}
