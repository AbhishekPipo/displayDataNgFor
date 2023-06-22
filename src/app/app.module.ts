import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActorDisplayComponent } from './actor-display/actor-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorDisplayComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
