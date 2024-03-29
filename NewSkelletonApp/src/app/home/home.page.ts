import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreUsuario: string='';
  segmentoSeleccionado: string = 'mis-datos'; // Valor inicial del segmento

  constructor() 
  {
    const state = window.history.state;
    if (state && state.usuario) {
      this.nombreUsuario = state.usuario;
  }}

}
