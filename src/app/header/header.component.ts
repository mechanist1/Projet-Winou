import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService,
    private router:Router
    ) { }

  ngOnInit(): void {

  }

  isLoggedIn() {
    return this.sharedService.getisLoggedIn(); // access the isLoggedIn property
  }
  logout(){
    localStorage.removeItem('token');
    console.log("item removed");
    this.router.navigate(['/signin']);


  }

}
