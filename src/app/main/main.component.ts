import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  @Input() @Output() private mainData: any;
  constructor() {
    this.mainData = {
      someData : 1
    };
  }

  ngOnInit() {
  }

}

