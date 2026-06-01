import { Component } from '@angular/core';

// Componente raiz da aplicação.
// Não tem muita lógica aqui, só o título do projeto.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-textil';
}
