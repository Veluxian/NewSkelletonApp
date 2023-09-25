import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RecuperaUsuarioService } from '../servicios/recupera-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class MiguelGuard implements CanActivate {
  constructor(private userService: RecuperaUsuarioService, private router: Router) {}

  canActivate(): boolean {
    const usuarioCapturado = this.userService.obtenerUsuario();
    if (usuarioCapturado) {
      return true; // Usuario capturado, permitir acceso
    } else {
      this.router.navigate(['/error-page']); // Usuario no capturado, redirigir a la página de error
      return false;
    }
  }
  
}
