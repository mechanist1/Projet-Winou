import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

  }

  isLoggedIn() {
    return this.sharedService.getisLoggedIn; // access the isLoggedIn property
  }

}
