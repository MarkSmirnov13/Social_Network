import { Component, OnInit, Input } from '@angular/core';
import { newService} from "../services/newservice";
import { News} from "../shared/news";

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.sass']
})
export class NewsListItemComponent implements OnInit {
  newService: newService;
  freshNew: News;

  //@Input() value = ' ';

  constructor(newService: newService) {
    this.newService = newService;
    this.freshNew = this.newService.getAllNews("freshNew");
  }

  ngOnInit() {
  }

}
