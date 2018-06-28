import { Component } from '@angular/core';

/**
 * Generated class for the AlertsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alerts',
  templateUrl: 'alerts.html'
})
export class AlertsComponent {

  text: string;

  constructor() {
    console.log('Hello AlertsComponent Component');
    this.text = 'Hello World';
  }

}
