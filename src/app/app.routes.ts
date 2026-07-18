import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Inicio } from './fabrica/inicio/inicio';
import { ColecaoComponent } from './colecao/colecao.component';

export const routes: Routes = [
  // Agora a HOME é a primeira página que abre.
  // O login virou opcional: o usuário entra só se quiser
  // (ou quando for finalizar uma compra no carrinho).
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movimentacao', component: Movimentacao },
  { path: 'colecao/:estacao', component: ColecaoComponent },
  { path: '**', redirectTo: 'login' }
];
