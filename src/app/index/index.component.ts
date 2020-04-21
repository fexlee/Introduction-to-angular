/**
 * The @Component() decorator identifies the class immediately below it as a component,
 * and provides the template and related component-specific metadata.
 */

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
import { Component, OnInit } from '@angular/core';

const dataJSON = require('../../data/data.json');

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public title = 'AngularJS';
  public conceptsList: Array<any> = [];
  public resourcesList: Array<any> = [];
  public selectedConcept: any;

  public SelectItem(item): void {
    this.selectedConcept = item;
  }

  /**
   * OnINIT is a life cycle hook called by Angular to indicate that
   * Angular is done creating the component.
   */
  public ngOnInit(): void {
    this.conceptsList = dataJSON.angularConceptsList;
    this.resourcesList = dataJSON.resourcesList;
    this.selectedConcept = this.conceptsList[0];
  }
}
