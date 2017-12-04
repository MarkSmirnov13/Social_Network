///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/loginservices';
import { User } from './shared/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userService: UserService;
  currentUser: User;

  constructor(userService: UserService) {
    this.userService = userService;
    this.currentUser = this.userService.getUserByName("currentUser");
  }

  ngOnInit() {
  }
}
