import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FabricaHeader } from '../fabrica-header/fabrica-header';

interface RegistroMovimentacao {
  of: number | null;
  inicial: string;
  final: string;
  fluxo: string;
  envio: string;
  producao: string;
  empresaAtual: string;
  empresaDestino: string;
  observacao: string;
  qualidade: string;
  piloto: '' | 'sim' | 'nao';
  quantidadePedida: number | null;
  quantidadeTotal: number | null;
  saldoPecas: number | null;
  dataExpedicao: string;
  responsavelLegal: string;
}

@Component({
  selector: 'app-movimentacao',
  imports: [ReactiveFormsModule, FabricaHeader],
  templateUrl: './movimentacao.html',
  styleUrls: ['./movimentacao.scss']
})
export class Movimentacao {
  readonly form = new FormGroup({
    of: new FormControl<number | null>(null, Validators.required),
    inicial: new FormControl('', { nonNullable: true, validators: Validators.required }),
    final: new FormControl('', { nonNullable: true, validators: Validators.required }),
    fluxo: new FormControl('', { nonNullable: true }),
    envio: new FormControl('', { nonNullable: true }),
    producao: new FormControl('', { nonNullable: true }),
    empresaAtual: new FormControl('', { nonNullable: true }),
    empresaDestino: new FormControl('', { nonNullable: true }),
    observacao: new FormControl('', { nonNullable: true }),
    qualidade: new FormControl('', { nonNullable: true }),
    piloto: new FormControl<'' | 'sim' | 'nao'>('', { nonNullable: true }),
    quantidadePedida: new FormControl<number | null>(null),
    quantidadeTotal: new FormControl<number | null>(null),
    saldoPecas: new FormControl<number | null>(null),
    dataExpedicao: new FormControl('', { nonNullable: true }),
    responsavelLegal: new FormControl('', { nonNullable: true })
  });

  movimentacoes: RegistroMovimentacao[] = [];
  indiceSelecionado: number | null = null;
  mensagem = '';

  incluir(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.mensagem = 'Preencha a OF e os setores inicial e final.';
      return;
    }

    this.movimentacoes = [...this.movimentacoes, this.form.getRawValue()];
    this.mensagem = 'Movimentação incluída com sucesso.';
    this.novoRegistro(false);
  }

  alterar(): void {
    if (this.indiceSelecionado === null) {
      this.mensagem = 'Selecione uma movimentação na tabela para alterar.';
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.mensagem = 'Preencha a OF e os setores inicial e final.';
      return;
    }

    const atualizadas = [...this.movimentacoes];
    atualizadas[this.indiceSelecionado] = this.form.getRawValue();
    this.movimentacoes = atualizadas;
    this.mensagem = 'Movimentação alterada com sucesso.';
  }

  excluir(): void {
    if (this.indiceSelecionado === null) {
      this.mensagem = 'Selecione uma movimentação na tabela para excluir.';
      return;
    }

    this.movimentacoes = this.movimentacoes.filter((_, indice) => indice !== this.indiceSelecionado);
    this.mensagem = 'Movimentação excluída.';
    this.novoRegistro(false);
  }

  consultar(): void {
    const of = this.form.controls.of.value;
    const indice = this.movimentacoes.findIndex((item) => item.of === of);

    if (of === null || indice === -1) {
      this.mensagem = 'Nenhuma movimentação encontrada para essa OF.';
      return;
    }

    this.selecionar(indice);
    this.mensagem = 'Movimentação localizada.';
  }

  selecionar(indice: number): void {
    this.indiceSelecionado = indice;
    this.form.setValue(this.movimentacoes[indice]);
  }

  novoRegistro(limparMensagem = true): void {
    this.form.reset();
    this.indiceSelecionado = null;
    if (limparMensagem) {
      this.mensagem = '';
    }
  }

  informarRelatorio(nome: string): void {
    this.mensagem = `${nome} disponível para integração com o banco de dados.`;
  }
}
