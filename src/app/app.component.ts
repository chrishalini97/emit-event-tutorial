import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emit-event-tutorial';

  valueEmittedFromChildComponent: string = " ";
  parentEventHandlerFunction(event: string){
    this.valueEmittedFromChildComponent = event
  }
}
