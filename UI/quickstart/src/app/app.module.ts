/*imports of Angular components*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule, XSRFStrategy, CookieXSRFStrategy  } from "@angular/http";
import { AppComponent }  from './app.component';
import {APP_BASE_HREF} from "@angular/common";
/*imports of other components*/
import {NavBarComponent} from  './navbar/navbar.component'
import {HomeComponent} from './home/home.component'
import {RegisterComponent} from './register/register.component'
/*imports of other Services*/
import {RegisterEmployeeService} from "./services/register.employee.service"
import {LoginComponent} from "./login/login.component";
import { Ng2PopupModule } from 'ng2-popup';


@NgModule({
  imports:[ BrowserModule, FormsModule, HttpModule, Ng2PopupModule,RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register-employee', component: RegisterComponent},
    {path: 'login',component:LoginComponent}
  ]) ],
  declarations: [ AppComponent, NavBarComponent,HomeComponent,RegisterComponent,LoginComponent],
  providers:[{
    provide: APP_BASE_HREF,
    useValue: '/'
  },{ provide: XSRFStrategy, useValue: new CookieXSRFStrategy ('myCookieName', 'My-Header-Name')},RegisterEmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
