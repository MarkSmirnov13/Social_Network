import { Component, OnInit } from '@angular/core';
import { Service } from "../Service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass'],
  providers: [Service]
})
export class NewsListComponent implements OnInit {
  items: string[] = [];

  constructor(private ls:Service) { }

  publishNews (item: string) {
    if (item == '') {
      alert("Вы не ввели новость!");
      return false;
    }
    else
      this.items = [item, ...this.items];
      //this.item = this.ls.setItemToLS('item', this.items);
  }

  ngOnInit() {
    //this.item = this.ls.getItemFromLS('item');
  }
  //item;
}
