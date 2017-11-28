import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import {RegistrationComponent} from "./registration/registration.component";
import { MessagesComponent } from "./messages/messages.component";

export const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: '', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sign', component: RegistrationComponent}
];

