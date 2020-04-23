import { Component, OnInit } from '@angular/core';
// Import the data
const dataJSON = require('../../data/data.json');

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  /**
   * Interpolation {{}}
   * Property binding lets you interpolate values into the HTML.
   * Interpolation: the insertion of data into the view.
   */
  public title = 'Electric Cars';






  /**
   * Structural directives: They shape or reshape the DOM's structure,
   * typically by adding, removing, or manipulating elements or HTML tags.
   */
  public cars = [];





  /**
   * Interpolation {{}}
   * Property binding lets you interpolate values into the HTML.
   * Interpolation: the insertion of data into the view.
   */
  public carSelected = 'Select a car';






  // See realtime data binding with interpolation {{}}
  // my favorite car


  /** */


  constructor() {}




  /**
   * Select the car
   */
  public SelectCar(car): void {
    this.carSelected = 'You selected ' + car;
  }

  public SelectCarTest(): string {
    return 'Something';
  }
  // Let's add my favorite car


  /** */





  // Dependency injection

  /**
   *
   * Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server,
   * validate user input, or log directly to the console; they delegate such tasks to services.
   */

  // Example

  // Let's add my favorite car

public AddCar(car): void {
  let newCar = car;
}

public BtnAddCar(): void {
  this.AddCar('Toyota');
}

  /** */


  /**
   * OnINIT is a life cycle hook called by Angular to indicate that Angular is done creating the component.
   */
  public ngOnInit(): void {
    this.cars = dataJSON.carsList;
  }
}
