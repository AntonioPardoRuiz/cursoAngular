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
    ImageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
