import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/loginservices';
import { User } from '../shared/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  userService: UserService;
  currentUser: User;

  constructor(userService: UserService) {
    this.userService = userService;
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
  }

}
