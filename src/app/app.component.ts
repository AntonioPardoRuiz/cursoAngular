import { Component } from '@angular/core';
//Importamos el boton del framework 
import {ToolbarModule} from 'primeng/toolbar';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'angularinycom';
//Definimos el navegador del menu 
  //Al inicio cargame estos elemenos
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  

}
