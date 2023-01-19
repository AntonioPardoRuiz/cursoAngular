import { Component } from '@angular/core';
//Importamos el boton del framework 
import {ToolbarModule} from 'primeng/toolbar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularinycom';
//Definimos el navegador del menu 
  //Al inicio cargame estos elemenos
  ngOnInit() {
  }
  

}
