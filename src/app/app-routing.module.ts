import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import all components
import { HomeComponent } from './home/home.component';

/*

The Angular Router enables you to show different components and data to the user based on where the user is in the application.
The router enables navigation from one view to the next as users perform tasks such as the following:

1. Entering a URL in the address bar to navigate to a corresponding page.
2. Clicking links on the page to navigate to a new page.
3. Clicking the browser's back and forward buttons to navigate backward and forward through the browser history.

*/


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
