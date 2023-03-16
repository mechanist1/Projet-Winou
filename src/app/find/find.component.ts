import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  ftitle:string="";
  fobject:string="";
  ftype:string="";
  fplace:string="";
  fdate:string="";



  constructor(){

  }
  ngOnInit(): void {
      
  }

}
