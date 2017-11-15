import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import {RegistrationComponent} from "./registration/registration.component";

export const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: '', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

