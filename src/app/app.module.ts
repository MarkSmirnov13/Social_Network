import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftListComponent } from './left-list/left-list.component';
import { MainComponent } from './main/main.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftListComponent,
    MainComponent,
    NewsListComponent,
    NewsListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
