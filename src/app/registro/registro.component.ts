import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  email:string='';
  password:string='';
  nombre:string='';
  apellido:string='';
  fecha:number=0;
  direccion:string='';
  codigo:string='';
  pais:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
