import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit {
  items: string[] = [];

  publishNews (item: string) {
    /*let txt = document.getElementById('name').value;
    if(txt == '')
    {
      alert('Вы забыли ввести новость.');
      return false;
    }
    else*/
      this.items.push(item);
  }

  constructor() { }

  ngOnInit() {
  }

}