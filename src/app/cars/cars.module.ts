import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the routing module
import { CarsRoutingModule } from './cars-routing.module';
import { TrucksComponent } from './trucks/trucks.component';
import { ElectricCarsComponent } from './electric-cars/electric-cars.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [TrucksComponent, ElectricCarsComponent, HomeComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
