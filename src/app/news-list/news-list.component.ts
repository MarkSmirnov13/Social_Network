import { Component, OnInit } from '@angular/core';
import { newService} from "../services/newservice";
import { News} from "../shared/news";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass'],
})
export class NewsListComponent implements OnInit {
  items: string;
  newService: newService;
  //freshNew: News;

  publishNews (item: string) {
    let news = new News(this.items);
    if (item == '') {
      alert("Вы не ввели новость!");
      return false;
    }
    else
      this.newService.addNews(news);
      this.newService.getAllNews(news.item);
  }

  /*constructor(newService: newService) {
    this.newService = newService;
    this.freshNew = this.newService.getAllNews("freshNew");
  }*/

  ngOnInit() {
  }
}
