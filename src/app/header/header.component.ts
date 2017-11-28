import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/loginservices';
import { User } from '../shared/login';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  userService: UserService;
  router: Router;
  currentUser: User;

  constructor(userService: UserService, router: Router) {
    this.router = router;
    this.userService = userService;
    this.currentUser = this.userService.getUserByName("currentUser");
  }

  signOut(): void {
    this.userService.SignOut();
    this.currentUser = null;
    this.router.navigateByUrl('sign');
  }

  ngOnInit() {
  }

}
