import { ActivatedRoute, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TemaService } from '../servicos/tema.service';
import { UsuarioService } from '../servicos/usuario.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('registra o Admin e retorna para o carrinho', () => {
    const navigateByUrl = vi.fn().mockResolvedValue(true);
    const router = { navigateByUrl } as unknown as Router;
    const route = {
      snapshot: { queryParamMap: { get: () => 'carrinho' } }
    } as unknown as ActivatedRoute;
    const usuarioService = new UsuarioService();
    const component = new LoginComponent(router, route, usuarioService, new TemaService());

    component.usuario = 'Admin';
    component.senha = '123456';
    component.fazerLogin();

    expect(usuarioService.estaLogado()).toBe(true);
    expect(localStorage.getItem('usuarioLogado')).toBe('Admin');
    expect(navigateByUrl).toHaveBeenCalledWith('/carrinho');
  });

  it('direciona o usuário Fabrica para o painel da fábrica', () => {
    const navigateByUrl = vi.fn().mockResolvedValue(true);
    const router = { navigateByUrl } as unknown as Router;
    const route = {
      snapshot: { queryParamMap: { get: () => null } }
    } as unknown as ActivatedRoute;
    const usuarioService = new UsuarioService();
    const component = new LoginComponent(router, route, usuarioService, new TemaService());

    component.usuario = 'Fabrica';
    component.senha = '123456';
    component.fazerLogin();

    expect(usuarioService.nomeUsuario).toBe('Fabrica');
    expect(navigateByUrl).toHaveBeenCalledWith('/inicio');
  });
});
