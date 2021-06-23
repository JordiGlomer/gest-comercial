import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from '../commons/navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [

    MatMenuModule,
    MatButtonModule,

  ],
  exports:[
    MatMenuModule,
    MatButtonModule,
  
  ]
})
export class MaterialModule { }
