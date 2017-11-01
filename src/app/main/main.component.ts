import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  title: string = '';
  @Output() add = new EventEmitter();

  onSubmit() {
    this.add.emit(this.title);
  }

}

