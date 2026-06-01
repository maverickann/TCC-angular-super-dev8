import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // IMPORTANTE: sem isso o [(ngModel)] não funciona!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../app.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';

// Aqui é onde o Angular sabe da existência dos componentes.
// Se criar um novo componente e ele não aparecer, provavelmente
// é porque esqueceu de declarar aqui.
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Necessário pra usar ngModel nos inputs do login
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
