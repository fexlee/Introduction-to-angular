import { Component, OnInit } from '@angular/core';
const dataJSON = require('../../data/data.json');

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {


  public title = 'Electric Cars';
  public types: Array<any> = [];
  public carSelected = 'Select a car';

  constructor() { }

  public SelectCar(item): void {
    this.carSelected = 'You selected ' + item;
  }

  // Dependency injection

  /**
   *
   * Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server,
   * validate user input, or log directly to the console; they delegate such tasks to services.
   */

   // Example



  /**
   * OnINIT is a life cycle hook called by Angular to indicate that Angular is done creating the component.
   */
  ngOnInit() {
    this.types = dataJSON.carsList.find(item => {
      return item.id === 'electric-cars';
    }).list;
  }
}
