import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * Import all components
 * Components are a logical piece of code for Angular JS application
 */
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CarsComponent } from './cars/cars.component';
/**
 * Our application routing module
 */
import { AppRoutingModule } from './app-routing.module';

/**
 * @NgModule is a directive that declares a compilation for a set of components
 *
 * Components are a logical piece of code for Angular JS application.
 */
@NgModule({
  // Creating the set of component for the module
  declarations: [
    AppComponent,
    IndexComponent,
    CarsComponent
  ],
  // Importing some extra modules (libraries)
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // Import our App routing module for the navigation
    AppRoutingModule,
  ],
  // View Template
  bootstrap: [AppComponent]
})
export class AppModule { }
