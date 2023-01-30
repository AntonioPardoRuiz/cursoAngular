import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//Para las rutas importamos
import { Router } from '@angular/router';
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

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    console.log("Inicio del componente Navegador");
  }

  //Creamos una funcion de tipo click, para pasar los valores
  addNuevoTitulo(){
    //Emitimos el nuevo valor
    this.nuevoTitulo.emit(this.value);
  }
  loadCatalogo(){
    console.log("loadCatalogo")
    this.router.navigate(['/catalogo'])
  }

  loadRegistro(){
    console.log("loadRegistro")
    this.router.navigate(['/registro'])
  }

}
