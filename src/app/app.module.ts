/**
 * An NgModule declares a compilation context for a set of components that is dedicated to an application domain,
 * a workflow, or a closely related set of capabilities. An NgModule can associate its
 * components with related code, such as services, to form functional units.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * Import all components
 */
import { HomeComponent } from './home/home.component';
/**
 * Import all child module
 */
import { AnimalsModule } from './animals/animals.module';
import { CarsModule } from './cars/cars.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AnimalsModule,
    CarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
