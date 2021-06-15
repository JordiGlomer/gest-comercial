import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
//import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { SupplierDataComponent } from './supplier/supplier-data/supplier-data.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import {Component} from '@angular/core';
import { CustomerComponent } from './customer/customer.component';
import { CustomerRoutingModule } from './customer/customer-routing.module';
import { CustomerModule } from './customer/customer.module';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'customer',component:CustomerModule},


  {path:'lista',component:CustomerListComponent},
  //{path:':id',component:CustomerRoutingModule},

  {path:'customer',component:CustomerComponent},
  {path:'supplier', component: SupplierListComponent},
  {path:'supplier/:id', component: SupplierDataComponent},
  {path:'**', component:NotfoundComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule {}
