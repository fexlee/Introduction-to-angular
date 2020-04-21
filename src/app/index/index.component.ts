// Import the component, and on init directive
import { Component, OnInit } from '@angular/core';

// Getting the data
const dataJSON = require('../../data/data.json');

/**
 * The @Component() decorator
 *
 * Identifies the class immediately below it as a component,
 * and provides the template and related component-specific metadata.
 *
 * Decorators
 *
 * They are a design pattern that is used to separate modification of a class
 * without modifying the original source code.
 */
@Component({
  // The selector identifies this directive in a template
  selector: 'app-index',
  // The path or URL of a template file for an Angular component (View).
  templateUrl: './index.component.html',
  // One or more paths or URLs for files containing stylesheets to use in this component.
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  /*
    1. Event binding lets your website respond to user input by updating your application data.

    - ngModel: it binds the logic data to a HTML element.
    - Structural directives: They shape or reshape the DOM's structure,
      typically by adding, removing, or manipulating elements or HTML tags.

    2. Property binding lets you interpolate values into the HTML.

    - Interpolation: the insertion of data into the view.
  */

  /**
   * NgModel
   */
  public selectedConcept: any; // Type ANY (any type of data)
  /**
   * Interpolation
   */
  public title = 'AngularJS';
  /**
   * Structural directives
   */
  public conceptsList = [];
  public resourcesList = [];



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
