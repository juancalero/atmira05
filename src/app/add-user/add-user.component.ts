import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  nombre:string;
  apellidos:string;
  direccion:string;
  telefono:string;

  constructor() { }

  ngOnInit() {
  }

  crear(){
    console.log(this.nombre)
  }
}
