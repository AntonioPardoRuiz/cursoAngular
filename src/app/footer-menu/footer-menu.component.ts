import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent implements OnInit {

    //Recibimos los valores de entrada del proceso. 
    @Input() direccion = '';
    @Input() telefono ='';
    @Input() email ='';
    //Definimos las variables. 
    lat: number = 38.3451700; 
    lng: number = -0.4814900; 
    zoom: number = 17
    //Gmap
    options: any;

  constructor() { }

  ngOnInit(): void {

    this.options = {
      center: {lat: 38.3451700, lng: -0.4814900},
      zoom: 10
  };
  }

}
