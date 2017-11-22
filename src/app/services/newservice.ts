import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observer} from "rxjs/Observer";
import {Observable} from 'rxjs/Observable';
import {News} from "../shared/news";

@Injectable()
export class Newservice {
  subject = new Subject<News>();


  addNews(items: News): void {
    let key: string = items.item;
    let data: string = JSON.stringify(items);
    localStorage.setItem(key, data);
  }

  getAllNews(item: string): News {
    let items = <News> JSON.parse(localStorage.getItem(item));
    this.subject.next(items);
    return items;
  }
}
