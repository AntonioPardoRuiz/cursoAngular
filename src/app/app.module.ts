import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Importamos el boton app.module.ts
import { ButtonModule } from 'primeng/button';
//ToolBar
import {ToolbarModule} from 'primeng/toolbar';
//Riple
import { RippleModule } from 'primeng/ripple';
//Divider
import { DividerModule } from "primeng/divider";
import { NavegadorComponent } from './navegador/navegador.component';
//Importamos la libreria para las imagenes: 
import {ImageModule} from 'primeng/image';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
//Importamos el mapa
import { AgmCoreModule } from '@agm/core';
import {GMapModule} from 'primeng/gmap';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToolbarModule,
    RippleModule,
    DividerModule, 
    ImageModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEVLuALTNr5HLHfj6OgQ53ah-HvTS0lG8'
    }), 
    GMapModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
