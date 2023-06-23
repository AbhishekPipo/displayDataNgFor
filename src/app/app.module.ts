import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActorDisplayComponent } from './actor-display/actor-display.component';
import { FavListComponent } from './fav-list/fav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorDisplayComponent,
    FavListComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
