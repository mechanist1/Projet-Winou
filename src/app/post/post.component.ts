import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
 pic:any="";
 






  constructor(private http : HttpClient){}
  sent(): void {
    const data = {
      object: this.object,
      title: this.title,
      des: this.des,
      date: this.date,
      detail: this.detail,
      type: this.type,
      place: this.place,
      pic: this.pic
    };
  
    this.http.post('http://127.0.0.1:3000', data).subscribe(
      (response) => {
        console.log("success");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
      
  }
}
