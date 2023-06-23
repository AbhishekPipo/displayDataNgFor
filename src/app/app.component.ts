import { Component } from '@angular/core';
import { ACTORS, Actor, FLOP_DATA,FlopData } from './FLOP_DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'displayDataNgFor';
  flopData: FlopData;
actors: Actor[];
favoriteActors: Actor[]=[];
logActor(actor:any){
  console.log(actor.name);
}

constructor(private titleService: Title){
  this.flopData=FLOP_DATA;
  this.actors=ACTORS;
  titleService.setTitle("FlopBox");
}


}
