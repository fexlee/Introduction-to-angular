import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../../data/angular-concepts.json');

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  public title = 'Trucks';
  public types: Array<any> = [];
  public carSelected = 'Select a car';

  constructor() { }

  public SelectCar(item): void {
    this.carSelected = 'You selected ' + item;
  }

  ngOnInit() {
    this.types = angularConceptsListJSON.carsList.find(item => {
      return item.id === 'trucks';
    }).list;
  }

}
