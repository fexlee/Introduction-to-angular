import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../../data/angular-concepts.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Cars';
  public types: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.types = angularConceptsListJSON.carsList;
  }

}
