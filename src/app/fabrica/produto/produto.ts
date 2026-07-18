
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
   imports: [
 FormsModule,CommonModule,
  ],
  templateUrl: './produto.html',
  styleUrls: ['./produto.scss']
})
export class Produto implements OnInit {

  // Controla a abertura do modal
  mostrarModal: boolean = false;

  // Indica se existe um produto carregado
  produtoCarregado: boolean = false;

  // Campo de pesquisa
  pesquisa: string = '';

  // Produto atualmente selecionado
  produto: any = {};

  // Produto escolhido no modal
  produtoSelecionado: any = null;

  // Lista de produtos (simulando um banco)
  produtos = [

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

  constructor(){}

  ngOnInit(): void {

    // Quando entrar na tela

    if(!this.produtoCarregado){

      this.abrirModal();

    }

  }

  // Abre o modal
  abrirModal(): void{

    this.mostrarModal = true;

  }

  // Fecha o modal
  fecharModal(): void{

    this.mostrarModal = false;

  }

  // Pesquisa produtos
  pesquisar(): void{

    if(this.pesquisa.trim() == ''){

      return;

    }

    const texto = this.pesquisa.toLowerCase();

    this.produtos = this.produtos.filter(produto =>

      produto.nome.toLowerCase().includes(texto) ||

      produto.referencia.toLowerCase().includes(texto) ||

      produto.of.toString().includes(texto)

    );

  }

  // Seleciona um produto da tabela
  selecionar(produto:any): void{

    this.produtoSelecionado = produto;

  }

  // Confirma a seleção
  confirmar(): void{

    if(this.produtoSelecionado){

      this.produto = {...this.produtoSelecionado};

      this.produtoCarregado = true;

      this.mostrarModal = false;

    }

  }

  // Limpa o formulário
  novoProduto(): void{

    this.produto = {

      codigo:'',
      nome:'',
      of:'',
      referencia:'',
      categoria:'',
      colecao:'',
      fornecedor:'',
      gramatura:'',
      cor:'',
      status:''

    };

    this.produtoCarregado = false;

    this.mostrarModal = false;

  }

}