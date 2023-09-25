import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombreUsuario!: string;
  contrasenaUsuario: string='';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  contrasenaValidacion(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, ''); // Elimina caracteres no numéricos
    this.contrasenaUsuario = numericValue.slice(0, 4); // Limita a 4 dígitos
  }

  enviarDatos() {
    if (this.nombreUsuario.trim() !== '') {
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.nombreUsuario
        }
      };

      this.router.navigate(['/home'], navigationExtras);
    }
  }
}
