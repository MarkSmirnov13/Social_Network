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
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: [RegistrationComponent]
})
export class AppModule { }
