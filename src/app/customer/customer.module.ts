import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerComponent } from './customer.component';
// import { MaterialModule } from '../material/material.module';
import { CommonsModule } from '../commons/commons.module';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDataComponent,
    CustomerComponent,
    CustomerRegisterComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CommonsModule,

  ]
})
export class CustomerModule { }
