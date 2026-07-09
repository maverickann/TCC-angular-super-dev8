import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Movimentacao } from './fabrica/movimentacao/movimentacao';
import { ColecaoComponent } from './colecao/colecao.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
  // Agora a HOME é a primeira página que abre.
  // O login virou opcional: o usuário entra só se quiser
  // (ou quando for finalizar uma compra no carrinho).
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },   // catálogo com rolagem infinita
  { path: 'carrinho', component: CarrinhoComponent },   // carrinho de compras
  { path: 'movimentacao', component: Movimentacao },
  { path: 'colecao/:estacao', component: ColecaoComponent },
  // qualquer endereço que não existe volta pra home
  { path: '**', redirectTo: 'home' }
];
