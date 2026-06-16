import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movimentacao.html',
 styleUrls: ['./movimentacao.scss']
})
export class Movimentacao {

form: FormGroup;

  constructor(private router: Router) {
       this.form= new FormGroup({

      of: new FormControl(''),
      incial: new FormControl(''),
      final: new FormControl(''),
      fluxo: new FormControl(''),
      envio: new FormControl(''),
      producao: new FormControl(''),
      empresa_atual: new FormControl(''),
      empresa_destino: new FormControl(''),
      obs: new FormControl(''),
      qualidade

    })
  }

  sair() {
    this.router.navigate(['Movimentacao']);
  }






 
  
}
