import { Component, OnInit } from '@angular/core';
const angularConceptsListJSON = require('../../data/angular-concepts.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'AngularJS';
  public conceptsList: Array<any> = [];
  public resourcesList: Array<any> = [];
  public selectedConcept: any;

  public SelectItem(item): void {
    this.selectedConcept = item;
  }

  public ngOnInit(): void {
    this.conceptsList = angularConceptsListJSON.angularConceptsList;
    this.resourcesList = angularConceptsListJSON.resourcesList;
    this.selectedConcept = this.conceptsList[0];
  }
}
