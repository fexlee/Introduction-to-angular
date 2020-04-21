import { Component, OnInit } from '@angular/core';
// Import the data
const dataJSON = require('../../data/data.json');

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {


  public title = 'Electric Cars';
  public cars = [];
  public carSelected = 'Select a car';

  // See realtime data binding with interpolation {{}}
  // my favorite car




  constructor() { }

  public SelectCar(car): void {
    this.carSelected = 'You selected ' + car;
  }

  // Dependency injection

  /**
   *
   * Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server,
   * validate user input, or log directly to the console; they delegate such tasks to services.
   */

   // Example

  // Let's add a new car








  /**
   * OnINIT is a life cycle hook called by Angular to indicate that Angular is done creating the component.
   */
  ngOnInit() {
    this.cars = dataJSON.carsList;
  }
}
