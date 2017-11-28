import {Injectable} from '@angular/core';
import {User} from '../shared/login';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService{
  subject = new Subject<User>();

  addUser(user: User): void {
    let key: string = user.username;
    let data: string = JSON.stringify(user);
    localStorage.setItem('currentUser', data);
    localStorage.setItem(key, data);
  }
  getUserByName(username: string): User{
    let user = <User> JSON.parse(localStorage.getItem(username));
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.subject.next(user);
    return user;
  }

  SignOut(): void{
    localStorage.removeItem('currentUser');
  }
}
