import { Component, OnInit } from '@angular/core';
import { Silla } from '../model/silla';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  //Lo definimos como variable.
  silla:Silla ={
      id:1,
      nombre:"Emperador", 
      descripcion:"Silla realizada en cuero 100%",
      urlimagen:"url",
      precio:90,
      cantidad:2000,
  }
  //Lo definimos como array.
  sillas: Array<Silla> =[
    {
      id:1,
      nombre:"Emperador", 
      descripcion:"Silla realizada en cuero 100%",
      urlimagen:"url",
      precio:100,
      cantidad:2000,
    },
    {
      id:2,
      nombre:"Atun", 
      descripcion:"Silla realizada algodon 100% sin manchas",
      urlimagen:"url",
      precio:90,
      cantidad:2000,
    },
    {
      id:3,
      nombre:"Inycom", 
      descripcion:"Silla realizada con personal de Inycom",
      urlimagen:"url",
      precio:80,
      cantidad:2000,
    },
    {
      id:4,
      nombre:"Angular", 
      descripcion:"Silla realizada con la piel de los que no sepan realizar este ejercicio",
      urlimagen:"url",
      precio:70,
      cantidad:2000,
    },
    {
      id:5,
      nombre:"Paro", 
      descripcion:"Silla ergonomica para cuando vayas a la lista del paro",
      urlimagen:"url",
      precio:60,
      cantidad:2000,
    },
    {
      id:6,
      nombre:"Empleo", 
      descripcion:"Silla realizada para los que saquen el ejercicio correctamente",
      urlimagen:"url",
      precio:50,
      cantidad:2000,
    }
  ]
  

  constructor( ) { }

  ngOnInit(): void {
  }

}
