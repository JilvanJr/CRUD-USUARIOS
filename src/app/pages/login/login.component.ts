import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName: string;

  constructor(private rota: Router) {}

  login() {
    // salva nome no Session Storage
    sessionStorage.setItem('user', this.userName);

    // após clicar no botão, direciona para home
    this.rota.navigate(['home']); 
  }
}