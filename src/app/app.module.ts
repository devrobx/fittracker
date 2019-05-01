import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    RegisterComponent,
    FormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
