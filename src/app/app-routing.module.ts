import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import all components
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, // Componente raiz
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
