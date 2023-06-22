import { style } from "@angular/animations";
import { Component, Input, EventEmitter } from "@angular/core";
import { Actor ,} from "../FLOP_DATA";


@Component({
    selector: "app-actor-display",
    templateUrl: "./actor-display.component.html",
    styleUrls: ["./actor-display.component.css"]
})
export class ActorDisplayComponent{

@Input() actor: any;
@Input() index: any;
@Input() even: any;


    ngOnInit(){

    }

   


    logActor(){
console.log(this.actor);
    }
}
