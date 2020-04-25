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
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  /**
   * Interpolation {{}}
   * Property binding lets you interpolate values into the HTML.
   * Interpolation: the insertion of data into the view.
   */
  public title = 'AngularJS';



  /**
   * Structural directives: They shape or reshape the DOM's structure,
   * typically by adding, removing, or manipulating elements or HTML tags.
   */
  public resourcesList = [];

  /**
   * OnINIT is a life cycle hook called by Angular to indicate that
   * Angular is done creating the component.
   */
  public ngOnInit(): void {
    this.resourcesList = dataJSON.resourcesList;
  }

}

