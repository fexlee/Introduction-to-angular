import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../../data/angular-concepts.json');

@Component({
  selector: 'app-reptiles',
  templateUrl: './reptiles.component.html',
  styleUrls: ['./reptiles.component.scss']
})
export class ReptilesComponent implements OnInit {

  public title = 'Reptiles';
  public types: Array<any> = [];
  public reptileSelected = 'Select an animal';

  constructor() { }

  public SelectReptile(item): void {
    this.reptileSelected = 'You selected ' + item;
  }

  ngOnInit() {
    this.types = angularConceptsListJSON.animalsList.find(item => {
      return item.id === 'reptiles';
    }).list;
  }

}
