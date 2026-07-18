import { Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ColecaoComponent } from './colecao/colecao.component';
import { DadosES } from './fabrica/dados-e.s/dados-e.s';
import { Desenvolvimento } from './fabrica/desenvolvimento/desenvolvimento';
import { Estoque } from './fabrica/estoque/estoque';
import { Faccoes } from './fabrica/faccoes/faccoes';
import { Financeiro } from './fabrica/financeiro/financeiro';
import { Inicio } from './fabrica/inicio/inicio';
import { Movimentacao } from './fabrica/movimentacao/movimentacao';
import { Produto } from './fabrica/produto/produto';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'colecao/:estacao', component: ColecaoComponent },

  { path: 'inicio', component: Inicio },
  { path: 'desenvolvimento', component: Desenvolvimento },
  { path: 'movimentacao', component: Movimentacao },
  { path: 'produto', component: Produto },
  { path: 'estoque', component: Estoque },
  { path: 'fluxo', component: DadosES },
  { path: 'faccoes', component: Faccoes },
  { path: 'financeiro', component: Financeiro },

  { path: '**', redirectTo: 'home' }
];
