import { Component, OnInit, Input } from '@angular/core';
import { NewService } from '../services/newservice';
import { News } from '../shared/news';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.sass']
})
export class NewsListItemComponent implements OnInit {
  newService: NewService;
  freshNews: News[];


  constructor(newService: NewService) {
    this.newService = newService;
    //this.freshNews = this.newService.getAllNews();
  }

  ngOnInit() {
  }

}
