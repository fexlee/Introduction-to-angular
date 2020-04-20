import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all components
import { HomeComponent } from './home/home.component';
import { MammalsComponent } from './mammals/mammals.component';
import { ReptilesComponent } from './reptiles/reptiles.component';

const routes: Routes = [
  {
    path: 'animals', component: HomeComponent, // Componente raiz
    children: [
      { path: 'mammals', component: MammalsComponent },
      { path: 'reptiles', component: ReptilesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
