import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loggedIn:boolean = false;
  private posts :any[]=[];
  private user:any="";
  

  constructor() { }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }
  setposts(data: any[]): void {
    this.posts=data;
  }
  getposts(): any[] {
    return this.posts;
  }

  getisLoggedIn() {
    return this.loggedIn;
    
  }
  setuser(data:any) {
    this.user=data;
    
  }
  getuser() {
    return this.user;
    
  }

}
