import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Movimentacao } from './fabrica/movimentacao/movimentacao';
import { ColecaoComponent } from './colecao/colecao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movimentacao', component: Movimentacao },
  { path: 'colecao/:estacao', component: ColecaoComponent },
  { path: '**', redirectTo: 'login' }
];