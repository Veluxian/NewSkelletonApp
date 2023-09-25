import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuperaUsuarioService {

  constructor() { }

  capturarUsuario(usuario: string): void {
    localStorage.setItem('usuario', usuario);
  }

  obtenerUsuario(): string | null {
    return localStorage.getItem('usuario');
    
  }
}
