import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.sass']
})
export class NewsListItemComponent implements OnInit {

  @Input() value = ' ';

  constructor() { }

  ngOnInit() {
  }

}
