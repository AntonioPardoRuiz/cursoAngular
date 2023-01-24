import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//Importamos las imagenes

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {

  //Recibimos los valores de entrada del proceso. 
  @Input() titulo = '';
  @Input() contacto ='';
  @Input() blog ='';
  @Input() mesasila ='';
  @Input() fechaDia='';

  @Output() nuevoTitulo = new EventEmitter<string>();
  value:string="Registrese"

  constructor() { }


  ngOnInit(): void {
    console.log("Inicio del componente Navegador");
  }

  //Creamos una funcion de tipo click, para pasar los valores
  addNuevoTitulo(){
    //Emitimos el nuevo valor
    this.nuevoTitulo.emit(this.value);
  }

}
