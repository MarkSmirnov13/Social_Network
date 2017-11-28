import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/loginservices';
import { User } from '../shared/login';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.sass']
})
export class NameComponent implements OnInit {

  userService: UserService;
  currentUser: User;

  constructor(userService: UserService) {
    this.userService = userService;
    this.currentUser = this.userService.getUserByName("currentUser");
  }

  ngOnInit() {
  }

}
