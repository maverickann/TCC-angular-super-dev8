import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movimentacao',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
      qualidade: new FormControl(''),

    })
  }

  sair() {
    this.router.navigate(['Movimentacao']);
  }






 
  
}