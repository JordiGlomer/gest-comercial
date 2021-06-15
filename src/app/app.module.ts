
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { CustomerModule } from './customer/customer.module';
import { SupplierModule } from './supplier/supplier.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './commons/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,

    CommonsModule,
    CustomerModule,
    SupplierModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
   

  ],
  exports:[]


})
export class AppModule { }
