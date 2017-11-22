import { Component } from '@angular/core';
import { User } from '../shared/login';
import { UserService } from '../services/loginservices';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent {

  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  userService: UserService;
  router: Router;
  constructor (userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }
  SignUp(username: string) {
    let user = new User(this.username, this.password, this.email)
    if (username == '')
      alert("Введите Данные!");
    else {
      this.userService.addUser(user);
      this.userService.getUserByUserName(user.username);
      this.router.navigateByUrl('main');
    }
  }

  SignIn():void{
    let currentUser = this.userService.getUserByUserName(this.username);
    if(currentUser){
      this.router.navigateByUrl('main');
    }else {
      alert("Данного пользователя не существует!");
    }
  }




}
