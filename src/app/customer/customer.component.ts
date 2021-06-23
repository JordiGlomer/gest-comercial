import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }
  sendData(){
    // console.log(this.formulario.value);
    // console.log(this.formulario.get('name')?.value);
  };
  ngOnInit(): void {

  }

}
