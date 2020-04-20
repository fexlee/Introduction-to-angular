import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../../data/angular-concepts.json');

@Component({
  selector: 'app-mammals',
  templateUrl: './mammals.component.html',
  styleUrls: ['./mammals.component.scss']
})
export class MammalsComponent implements OnInit {

  public title = 'Mammals';
  public types: Array<any> = [];
  public mammalSelected = 'Select an animal';

  constructor() { }

  public SelectMammal(item): void {
    this.mammalSelected = 'You selected ' + item;
  }

  ngOnInit() {
    this.types = angularConceptsListJSON.animalsList.find(item => {
      return item.id === 'mammals';
    }).list;
  }

}
