import { Component, OnInit } from '@angular/core';

import { New } from './shared/new';
import { newss } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

  newss: New[] = newss;

  create(title: string) {
    const news = new New(title);
    this.newss.push(news);
  }
}
