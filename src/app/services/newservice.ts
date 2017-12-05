import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import {News} from '../shared/news';
import { User } from '../shared/login';
import { UserService } from '../services/loginservices';

@Injectable()
export class NewService {
  subject = new Subject<News[]>();
  userService: UserService;
  currentUser: User;

  constructor( userService: UserService ) {
    this.userService = userService;
    this.currentUser = this.userService.getUserByName('currentUser');
  }

  addNews(items: News): void {
    /*const key: string = items.item;
    const data: string = JSON.stringify(items);
    localStorage.setItem('freshNew', data);
    localStorage.setItem(key, data);

    const key1: string = names.name;
    const data1: string = JSON.stringify(names);
    localStorage.setItem('freshNew', data1);
    localStorage.setItem(key1, data1);*/

    let news = JSON.parse(localStorage.getItem('news'))as News[];
    if (news === null) {
      news = [];
    }
    localStorage.setItem('news', JSON.stringify([items, ...news],));


    const user = JSON.parse(localStorage.getItem('news')) as News[];
    localStorage.setItem('news', JSON.stringify(user));
    this.subject.next(user);

  }


  getAllNews(): News[] {
    let news = <News[]> JSON.parse(localStorage.getItem('news'));
    this.subject.next(news);
    return news;
  }

  getName(): News[] {
    let user = <News[]> JSON.parse(localStorage.getItem('currentUser'));
    this.subject.next(user);
    return user;
  }

}
