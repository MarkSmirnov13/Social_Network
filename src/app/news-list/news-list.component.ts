import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit {
  items: string[] = [];

  publishNews (item: string) {
    if (item == '') {
      alert("Вы не ввели новость!");
      return false;
    }
    else
      this.items = [item, ...this.items];
  }

  constructor() { }

  ngOnInit() {
  }

}
