import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Import all child module
 */
import { AnimalsModule } from './animals/animals.module';
import { CarsModule } from './cars/cars.module';
import { HomeComponent } from './home/home.component';

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
