import { Component } from '@angular/core';
import { FabricaHeader } from '../fabrica-header/fabrica-header';

interface Produto {
  nome: string;
  referencia: string;
  dataCriacao: string;
  quantidade: number;
}
@Component({
  selector: 'app-inicio',
  imports: [FabricaHeader],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {

  // ============================
  // DASHBOARD
  // ============================

  dashboard = {

    totalProdutos: 523,

    emProducao: 145,

    estoqueAtual: 12480,

    faccoesAtivas: 18,

    receita: 1000,

    despesas: 300

  };

  // ============================
  // ÚLTIMOS PRODUTOS
  // ============================

  produtos: Produto[] = [

    {
      nome: 'Regata Verão',
      referencia: '00002',
      dataCriacao: '26/06/2026',
      quantidade: 250
    },

    {
      nome: 'Calça Cargo',
      referencia: '00003',
      dataCriacao: '26/06/2026',
      quantidade: 180
    },

    {
      nome: 'Camiseta Oversized Preta',
      referencia: '00005',
      dataCriacao: '26/06/2026',
      quantidade: 320
    },

    {
      nome: 'Jaqueta Jeans',
      referencia: '00001',
      dataCriacao: '26/06/2026',
      quantidade: 90
    }

  ];

  // ============================
  // GETTERS
  // ============================

  get lucro(): number {

    return this.dashboard.receita - this.dashboard.despesas;

  }

  // ============================
  // MÉTODOS
  // ============================

  adicionarProduto(): void {

    console.log('Novo produto');

  }

  atualizarDashboard(): void {

    console.log('Atualizando dashboard...');

  }

  exportarRelatorio(): void {

    console.log('Exportando relatório...');

  }

  carregarProdutos(): void {

    console.log('Buscando produtos...');

  }

  removerProduto(indice: number): void {

    this.produtos.splice(indice, 1);

  }

  editarProduto(produto: Produto): void {

    console.log(produto);

  }

}
