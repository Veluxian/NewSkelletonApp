import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecuperaUsuarioService } from 'src/app/servicios/recupera-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombreUsuario!: string;
  contrasenaUsuario: string='';

  constructor(private router:Router, private servicioUsuario: RecuperaUsuarioService) { }

  ngOnInit() {
  }

  contrasenaValidacion(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, ''); 
    this.contrasenaUsuario = numericValue.slice(0, 4); 
  }

  enviarDatos() {
    if (this.nombreUsuario.trim() !== '') {
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.nombreUsuario
        }
      };
      this.servicioUsuario.capturarUsuario(this.nombreUsuario);
      this.router.navigate(['/home'], navigationExtras);
    }
  }
}
