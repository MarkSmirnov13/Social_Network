import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftListComponent } from './left-list/left-list.component';
import { MainComponent } from './main/main.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import { NameComponent } from './name/name.component';
import { PhotoComponent } from './photo/photo.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './app.router';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from "./services/loginservices";
import { MessagesComponent } from './messages/messages.component';
import { ChatThreadsComponent } from './messages/chat-threads/chat-threads.component';
import { ChatThreadComponent } from './messages/chat-thread/chat-thread.component';
import {News} from "./shared/news";
import { UsersService } from "./messages/user/user.service";
import { ThreadsService } from "./messages/Thread/threads.service";
import {MessagesService} from "./messages/message/messages.service";
import { NewService } from "./services/newservice";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftListComponent,
    MainComponent,
    NewsListComponent,
    NewsListItemComponent,
    ProfileComponent,
    NameComponent,
    PhotoComponent,
    RegistrationComponent,
    MessagesComponent,
    ChatThreadsComponent,
    ChatThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [UserService, NewService, UsersService, MessagesService],
  bootstrap: [AppComponent],
  exports: [RegistrationComponent]
})
export class AppModule { }
