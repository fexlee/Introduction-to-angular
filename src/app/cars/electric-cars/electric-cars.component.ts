import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../../data/angular-concepts.json');

@Component({
  selector: 'app-electric-cars',
  templateUrl: './electric-cars.component.html',
  styleUrls: ['./electric-cars.component.scss']
})
export class ElectricCarsComponent implements OnInit {

  public title = 'Electric Cars';
  public types: Array<any> = [];
  public carSelected = 'Select a car';

  constructor() { }

  public SelectCar(item): void {
    this.carSelected = 'You selected ' + item;
  }

  ngOnInit() {
    this.types = angularConceptsListJSON.carsList.find(item => {
      return item.id === 'electric-cars';
    }).list;
  }

}
