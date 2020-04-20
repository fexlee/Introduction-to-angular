import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the routing module
import { AnimalsRoutingModule } from './animals-routing.module';
import { ReptilesComponent } from './reptiles/reptiles.component';
import { HomeComponent } from './home/home.component';
import { MammalsComponent } from './mammals/mammals.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, MammalsComponent, ReptilesComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    FormsModule
  ]
})
export class AnimalsModule { }
