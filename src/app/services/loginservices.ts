import {Injectable} from '@angular/core';
import {User} from '../shared/login';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService{
  subject = new Subject<User>();

  addUser(user: User): void {
    let key: string = user.username;
    let data: string = JSON.stringify(user);
    localStorage.setItem(key, data);
  }
  getUserByUserName(username: string): User{
    let user = <User> JSON.parse(localStorage.getItem(username));
    this.subject.next(user);
    return user;
  }
  getCurrentUser(): Observable<User>{
    return this.subject
  }
}
