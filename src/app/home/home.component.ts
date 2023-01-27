import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email='';
  password='';


  constructor() { }


  ngOnInit(): void {
  }
  valores(){
    console.log("Email:"+this.email);
    console.log("Password:"+this.password);
  }

}
