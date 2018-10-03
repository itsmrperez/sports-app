import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasketballComponent} from './basketball/basketball.component';
import { ServersComponent } from './servers/servers.component'

@NgModule({
  declarations: [
    AppComponent,
    BasketballComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
