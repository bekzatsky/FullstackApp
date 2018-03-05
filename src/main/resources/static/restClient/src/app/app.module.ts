import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {UserService} from "./services/user.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {UserlistComponent} from './components/userlist/userlist.component';
import {UserformComponent} from './components/userform/userform.component';

const appRoutes = [
  {path: '', component: UserlistComponent},
  {path: 'op', component: UserformComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
