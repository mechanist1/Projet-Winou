import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   
 object:string="";
 title:string="";
 des:string="";
 date:any="" ;
 detail:string="";
 type:string="cash";
 place:string="o1";
 pic:any="o1";
 






  constructor(){
  let hello="hi";
  
  }
  ngOnInit(): void {
      
  }
}
