import { Component } from '@angular/core';
//Importamos el boton del framework 
import {ToolbarModule} from 'primeng/toolbar';
import { NavegadorComponent } from './navegador/navegador.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  midireccion:boolean=false;
  title = 'angularinycom';
  miapp ="MESASILA";
  nuevoTitulo:string='';
  contacto:string='CONTACTO';
  blog:string='BLOG';
  mesasila:string='MESASILA MUNDIAL';
  fechaDia:string='';
  direccion:string='Calle Vicente Ferrer numero 15';
  telefono:string='965102232';
  email:string='antoniomiguel.pardo@inycom.es';
 

//Definimos el navegador del menu 
  //Al inicio cargame estos elemenos
  ngOnInit() {
    console.log("Inicio del componente App");
    //Calcular fecha del dia 
    const fecha = new Date();
    this.fechaDia = fecha.toLocaleDateString();
    
  }
  
  addNuevoTitulo(valor:string){
    this.nuevoTitulo = valor;
  }

  /* Mostrar Direccion*/ 
  mostrarDireccion(){
    console.log("mostrarDireccion");
    this.midireccion=true;

  }

  /*Retirar Direccion*/
  retirarDireccion(){
    console.log("retirarDireccion");
    this.midireccion=false;
  }

}
