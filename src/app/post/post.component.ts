import { Component, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Route, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  tel:any="";
  title:string="";
  des:string="";
  dateoflosing:any="" ;
  detail:string="";
  type:string="cash";
  place:string="o1";
  posts:any[]=[];
    pic: File | undefined;

  onFileSelected(fileInputEvent: Event): void {
    const file = (fileInputEvent.target as HTMLInputElement).files?.[0];
    if (file) {
      this.pic = file;
    }
  }
   

  constructor(private http : HttpClient ,
            private router:Router,
           private sharedService: SharedService
    ){}

  sent(): void {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('tel', this.tel);
    formData.append('des', this.des);
    formData.append('date', this.dateoflosing);
    formData.append('detail', this.detail);
    formData.append('type', this.type);
    formData.append('place', this.place);
    if (this.pic) {
      formData.append('pic', this.pic, this.pic.name);
    }
  
    this.http.post('http://127.0.0.1:3000/post', formData).subscribe(
      (response: object ): void=> {
        this.posts = response as any[];
        this.sharedService.setposts(this.posts);
        console.log(this.posts);
      

      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/']);
}
  ngOnInit(): void {
      
  }
}