import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Inicio } from './fabrica/inicio/inicio';
import { ColecaoComponent } from './colecao/colecao.component';

import { Desenvolvimento } from './fabrica/desenvolvimento/desenvolvimento';
import { Movimentacao} from './fabrica/movimentacao/movimentacao';
import { Produto } from './fabrica/produto/produto';
import { Estoque } from './fabrica/estoque/estoque';
import { Faccoes } from './fabrica/faccoes/faccoes';
import { Financeiro } from './fabrica/financeiro/financeiro';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'desenvolvimento', component: Desenvolvimento },
  { path: 'movimentacao', component:Movimentacao  },
  { path: 'produto', component:Produto  },
  { path: 'estoque', component: Estoque },
  { path: 'faccoes', component: Faccoes },
  { path: 'financeiro', component: Financeiro },
  { path: 'inicio', component: Inicio },
  { path: 'colecao/:estacao', component: ColecaoComponent },
  { path: '**', redirectTo: 'login' }
  
];