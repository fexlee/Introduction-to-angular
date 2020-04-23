// Import angular predifine libraries
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import all components
import { IndexComponent } from './index/index.component';
import { CarsComponent } from './cars/cars.component';

/*

The Angular Router enables you to show different components and data to the user based on
where the user is located in the application.

Three types of navigation

1. Navigating by an URL in the address bar to navigate to a corresponding page.
2. Clicking links on the page to navigate to a new page.
3. Clicking the browser's back and forward buttons to navigate backward and forward
through the browser history.

See example ...

*/


const routes: Routes = [
  {
    // Each path is associated with a component
    path: 'index', component: IndexComponent
  },
  {
    path: 'cars', component: CarsComponent
  }
];

/**
 * In this case, this @NgModule is declaring a compilation for a set of routes
 * (in which each of them has a component)
 */
@NgModule({
  // Angular predifine module that manages all existing routes inside the module
  // forRoot ->  Creates and configures a module with all the router
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  // Go to the presentation
})
export class AppRoutingModule { }
