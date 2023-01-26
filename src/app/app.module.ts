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
//Importamos el card
import {CardModule} from 'primeng/card';
//Importamos la libreria para las imagenes: 
import {ImageModule} from 'primeng/image';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
//Importamos el mapa
import { AgmCoreModule } from '@agm/core';
import {GMapModule} from 'primeng/gmap';
//Importamos RouterModule 
import { Routes, RouterModule } from '@angular/router';

//Importamos los componentes.
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
//Importamos los componentes

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'catalogo', component: CatalogoComponent}, 
]

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    FooterMenuComponent,
    CatalogoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
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
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
