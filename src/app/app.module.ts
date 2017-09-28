import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { tableroComponent } from './tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    tableroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
