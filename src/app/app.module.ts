import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MyProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
