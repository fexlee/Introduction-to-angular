import { Component, OnInit } from '@angular/core';
// Navigation Library
import { Router } from '@angular/router';

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
  selector: 'app-root', // Notice that this selector we are using it in the index.html file
  // The path or URL of a template file for an Angular component (View).
  templateUrl: './app.component.html',
  // One or more paths or URLs for files containing stylesheets to use in this component.
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  /**
   *  Creates an instance of AppComponent.
   *  Declaring and getting the instance of Router for navigation
   */
  constructor(private router: Router) { }

  /**
   * OnINIT is a life cycle hook called by Angular to indicate that
   * Angular is done creating the component.
   */
  public ngOnInit() {
    // it navigates through the URL
    this.router.navigate(['/index']);
  }
}
