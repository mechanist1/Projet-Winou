import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  username:string="";
  email:string="";
  pwd:string="";
  pwdagain:string="";




  constructor(){

  }
  ngOnInit(): void {
      
  }

}
