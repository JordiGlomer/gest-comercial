import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
customers: any=[];
customer!: any;
  constructor() { }
sendData(){
  // console.log(this.formulario.value);
  // console.log(this.formulario.get('name')?.value);
};
  ngOnInit(): void {
  }

}
