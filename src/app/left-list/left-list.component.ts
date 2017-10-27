import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left-list',
  templateUrl: './left-list.component.html',
  styleUrls: ['./left-list.component.sass']
})
export class LeftListComponent implements OnInit {
  @Input() @Output() private listData: any;
  constructor() { }

  ngOnInit() {
  }

}
