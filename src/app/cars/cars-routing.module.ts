import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all components
import { HomeComponent } from './home/home.component';
import { ElectricCarsComponent } from './electric-cars/electric-cars.component';
import { TrucksComponent } from './trucks/trucks.component';


const routes: Routes = [
  {
    path: 'cars', component: HomeComponent, // Componente raiz
    children: [
      { path: 'electric-cars', component: ElectricCarsComponent },
      { path: 'trucks', component: TrucksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
