import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/newservice';
import { News } from '../shared/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass'],
})
export class NewsListComponent implements OnInit {
  items: string;
  newService: NewService;
  freshNews: News[];

  publishNews(item: string): boolean {
    const news = new News(this.items);
    if (item === '') {
      alert('Вы не ввели новость!');
      return false;
    }
    this.newService.addNews(news);
    this.newService.getAllNews();

  }

  constructor(newService: NewService) {
    this.newService = newService;
    this.freshNews = this.newService.getAllNews();
    this.newService.subject.subscribe(news => this.freshNews = news);
  }


  ngOnInit() {
  }
}
