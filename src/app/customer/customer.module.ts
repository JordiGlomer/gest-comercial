import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerComponent } from './customer.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDataComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule
  ]
})
export class CustomerModule { }
