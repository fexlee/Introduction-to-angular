/**
 * Components: Every Angular application has at least one component, the root component that connects a component hierarchy
 * with the page document object model (DOM). Each component defines a class that contains application data and
 * logic, and is associated with an HTML template that defines a view to be displayed in a target environment.
 */
import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../../data/angular-concepts.json');

@Component({
  selector: 'app-mammals',
  templateUrl: './mammals.component.html',
  styleUrls: ['./mammals.component.scss']
})
export class MammalsComponent implements OnInit {
/*
1. Event binding lets your app respond to user input in the target
environment by updating your application data.

2. Property binding lets you interpolate values that
are computed from your application data into the HTML.

*/
  public title = 'Mammals';
  public types: Array<any> = [];
  public mammalSelected = 'Select an animal';

  constructor() { }

  public SelectMammal(item): void {
    this.mammalSelected = 'You selected ' + item;
  }

  ngOnInit() {
    this.types = angularConceptsListJSON.animalsList.find(item => {
      return item.id === 'mammals';
    }).list;
  }

}
