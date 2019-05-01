import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {NavbarComponent} from './navbar/navbar.component';
import {WelcomeComponent } from './welcome/welcome.component';
import {RegisterComponent} from './register/register.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'register/form',
    pathMatch: 'full',
    component: FormComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
