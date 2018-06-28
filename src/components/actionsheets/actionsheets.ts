import { Component } from '@angular/core';

/**
 * Generated class for the ActionsheetsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'actionsheets',
  templateUrl: 'actionsheets.html'
})
export class ActionsheetsComponent {

  text: string;

  constructor() {
    console.log('Hello ActionsheetsComponent Component');
    this.text = 'Hello World';
  }

}
