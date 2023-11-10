import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent  implements OnInit {

  nombreUsuario: string='';
  niveles:any[] = [
    {id:1, nivel:"media"},
    {id:2, nivel:"Tecnico"},
    {id:3, nivel:"Superior"}
  ]
  data:any={
    nombre:"",
    apellido:"",
    educacion:"",
    nacimiento:""
  };
  constructor() 
  {
    const state = window.history.state;
    if (state && state.usuario) {
      this.nombreUsuario = state.usuario;
  }}

  ngOnInit() {}

}
