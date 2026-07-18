import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FabricaHeader } from '../fabrica-header/fabrica-header';

interface ProdutoFabrica {
  codigo: number | string;
  nome: string;
  of: number | string;
  referencia: string;
  categoria: string;
  colecao: string;
  fornecedor: string;
  gramatura: string;
  cor: string;
  status: string;
}

@Component({
  selector: 'app-produto',
  imports: [FormsModule, CommonModule, FabricaHeader],
  templateUrl: './produto.html',
  styleUrls: ['./produto.scss']
})
export class Produto implements OnInit {
  mostrarModal = false;
  produtoCarregado = false;
  pesquisa = '';
  produto: Partial<ProdutoFabrica> = {};
  produtoSelecionado: ProdutoFabrica | null = null;

  private readonly todosProdutos: ProdutoFabrica[] = [
    {
      codigo: 1,
      nome: 'Jaqueta Jeans',
      of: 1001,
      referencia: 'JJ-001',
      categoria: 'Jaquetas',
      colecao: 'Inverno',
      fornecedor: 'Fornecedor A',
      gramatura: '250g',
      cor: 'Azul',
      status: 'Em Produção'
    },
    {
      codigo: 2,
      nome: 'Calça Cargo',
      of: 1002,
      referencia: 'CC-002',
      categoria: 'Calças',
      colecao: 'Street',
      fornecedor: 'Fornecedor B',
      gramatura: '300g',
      cor: 'Preta',
      status: 'Finalizado'
    },
    {
      codigo: 3,
      nome: 'Regata Básica',
      of: 1003,
      referencia: 'RB-003',
      categoria: 'Camisetas',
      colecao: 'Verão',
      fornecedor: 'Fornecedor C',
      gramatura: '180g',
      cor: 'Branca',
      status: 'Em Desenvolvimento'
    }
  ];

  produtos = [...this.todosProdutos];

  ngOnInit(): void {
    if (!this.produtoCarregado) {
      this.abrirModal();
    }
  }

  abrirModal(): void {
    this.pesquisa = '';
    this.produtos = [...this.todosProdutos];
    this.mostrarModal = true;
  }

  fecharModal(): void {
    this.mostrarModal = false;
  }

  pesquisar(): void {
    const texto = this.pesquisa.trim().toLowerCase();

    if (!texto) {
      this.produtos = [...this.todosProdutos];
      return;
    }

    this.produtos = this.todosProdutos.filter((produto) =>
      produto.nome.toLowerCase().includes(texto) ||
      produto.referencia.toLowerCase().includes(texto) ||
      produto.of.toString().includes(texto)
    );
  }

  selecionar(produto: ProdutoFabrica): void {
    this.produtoSelecionado = produto;
  }

  confirmar(): void {
    if (!this.produtoSelecionado) {
      return;
    }

    this.produto = { ...this.produtoSelecionado };
    this.produtoCarregado = true;
    this.mostrarModal = false;
  }

  novoProduto(): void {
    this.produto = {
      codigo: '',
      nome: '',
      of: '',
      referencia: '',
      categoria: '',
      colecao: '',
      fornecedor: '',
      gramatura: '',
      cor: '',
      status: ''
    };
    this.produtoSelecionado = null;
    this.produtoCarregado = false;
    this.mostrarModal = false;
  }
}
