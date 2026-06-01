import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando os componentes que criamos
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';

// Aqui a gente define pra qual componente cada URL aponta
// TODO: quando tiver mais telas, adicionar as rotas aqui
const routes: Routes = [
  // URL raiz já manda direto pro login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Tela de login
  { path: 'login', component: LoginComponent },

  // Tela principal (só entra depois do login)
  { path: 'home', component: HomeComponent },

  // Qualquer URL que não existe volta pro login
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
