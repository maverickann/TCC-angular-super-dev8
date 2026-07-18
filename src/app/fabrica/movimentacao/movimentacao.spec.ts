import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Movimentacao } from './movimentacao';

describe('Movimentacao', () => {
  let component: Movimentacao;
  let fixture: ComponentFixture<Movimentacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movimentacao],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movimentacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require the OF and both sectors before including a movement', () => {
    component.incluir();

    expect(component.movimentacoes).toHaveLength(0);
    expect(component.mensagem).toBe('Preencha a OF e os setores inicial e final.');
    expect(component.form.controls.of.touched).toBe(true);
    expect(component.form.controls.inicial.touched).toBe(true);
    expect(component.form.controls.final.touched).toBe(true);
  });

  it('should include, update and delete a movement without losing the form state', () => {
    component.form.patchValue({
      of: 1001,
      inicial: 'Corte',
      final: 'Costura',
      quantidadePedida: 120,
    });

    component.incluir();
    expect(component.movimentacoes).toHaveLength(1);
    expect(component.movimentacoes[0].final).toBe('Costura');

    component.selecionar(0);
    component.form.patchValue({ final: 'Acabamento' });
    component.alterar();
    expect(component.movimentacoes[0].final).toBe('Acabamento');

    component.excluir();
    expect(component.movimentacoes).toHaveLength(0);
    expect(component.indiceSelecionado).toBeNull();
  });
});
