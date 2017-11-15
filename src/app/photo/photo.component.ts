import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.sass'],
  providers: [Service]
})
export class PhotoComponent implements OnInit {

  constructor(private ls:Service) { }


  ngOnInit() {
    var avatar = this.ls.getItemFromLS('avatar');

    this.avatar = avatar;
  }
  avatar;
}
