import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/newservice';
import { News } from '../shared/news';
import { UserService } from '../services/loginservices';
import { User } from '../shared/login';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass'],
})
export class NewsListComponent implements OnInit {
  items: string;
  name: string;
  newService: NewService;
  freshNews: News[];
  userService: UserService;
  currentUser: User;

  publishNews(item: string): boolean {
    this.name = this.currentUser.username.toString();
    const news = new News(this.items, this.name);
    if (item === '') {
      alert('Вы не ввели новость!');
      return false;
    }
    this.newService.addNews(news);
    this.newService.getAllNews();
    // this.newService.getName();

  }

  constructor(newService: NewService, userService: UserService) {
    this.newService = newService;
    this.freshNews = this.newService.getAllNews();
    this.newService.subject.subscribe(news => this.freshNews = news);
    // this.freshNews = this.newService.getName();
    this.newService.subject.subscribe(user => this.freshNews = user);
    this.userService = userService;
    this.currentUser = this.userService.getUserByName("currentUser");
  }


  ngOnInit() {
  }
}
