/**
 * Components: Every Angular application has at least one component, the root
 * component that connects a component hierarchy with the page
 * document object model (DOM). Each component defines a class that contains
 * application data and logic, and is associated with an HTML template that
 * defines a view to be displayed in a target environment.
 */
import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../../data/angular-concepts.json');

/**
 * The @Component() decorator identifies the class immediately below it as a component,
 * and provides the template and related component-specific metadata.
 */
@Component({
  selector: 'app-mammals',
  templateUrl: './mammals.component.html',
  styleUrls: ['./mammals.component.scss']
})
export class MammalsComponent implements OnInit {
/*
  1. Event binding lets your app respond to user input in the target
  environment by updating your application data.

  - ngModel
  - Structural directives:
  They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.

  2. Property binding lets you interpolate values that
  are computed from your application data into the HTML.

  - Interpolation
*/
  public title = 'Mammals';
  public types: Array<any> = [];
  public mammalSelected = 'Select an animal';

  constructor() { }

  public SelectMammal(item): void {
    this.mammalSelected = 'You selected ' + item;
  }

  /**
   * OnINIT is a life cycle hook called by Angular to indicate that
   * Angular is done creating the component.
   */
  ngOnInit() {
    this.types = angularConceptsListJSON.animalsList.find(item => {
      return item.id === 'mammals';
    }).list;
  }

}
