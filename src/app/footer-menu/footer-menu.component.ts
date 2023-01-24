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

  constructor() { }

  ngOnInit(): void {
  }

}
