import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import {News} from '../shared/news';

@Injectable()
export class NewService {
  subject = new Subject<News[]>();

  addNews(items: News): void {
    const key: string = items.item;
    const data: string = JSON.stringify(items);
    localStorage.setItem('freshNew', data);
    localStorage.setItem(key, data);

    let news = JSON.parse(localStorage.getItem('news'))as News[];
    if (news === null) {
      news = [];
    }
    localStorage.setItem('news', JSON.stringify([items, ...news]));

    this.subject.next(news);
  }

  getAllNews(): News[] {
    let news = <News[]> JSON.parse(localStorage.getItem('news'));
    this.subject.next(news);
    return news;
  }
}
