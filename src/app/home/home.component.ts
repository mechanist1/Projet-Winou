import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: any[] = [];
  a =Date.now();

  constructor(private http: HttpClient,
              private router: Router,
              private sharedService: SharedService) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/').subscribe(
      (response) => {
        this.p = response as any [];
        console.log(this.p);
        console.log("done")
      },
      (error) => {
        console.log(error);
      }
    );
  }

  arrayBufferToBase64(buffer: ArrayBuffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
}
