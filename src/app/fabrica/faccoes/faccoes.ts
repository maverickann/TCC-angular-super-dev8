import { Component } from '@angular/core';
import { FabricaHeader } from '../fabrica-header/fabrica-header';

interface ServicoFaccao {
  nome: string;
  valor: number;
  tempo: string;
}

@Component({
  selector: 'app-faccoes',
  imports: [FabricaHeader],
  templateUrl: './faccoes.html',
  styleUrl: './faccoes.scss',
})
export class Faccoes {

  // =============================
  // DASHBOARD
  // =============================

  dashboard = {
    faccoesAtivas: 18,
    ofsProducao: 42,
    pecasEnviadas: 15840,
    pecasRecebidas: 14965,
    pendentes: 875,
    custoMes: 186420
  };

  // =============================
  // FILTROS
  // =============================

  pesquisa = '';
  numeroOF = '';
  status = '';
  data = '';

  // =============================
  // CADASTRO
  // =============================

  faccao = {

    codigo: '',
    nome: '',
    razaoSocial: '',
    cnpj: '',
    responsavel: '',
    telefone: '',
    whatsapp: '',
    email: '',
    cidade: '',
    estado: '',
    especialidade: '',
    status: 'Ativa'

  };

  // =============================
  // SERVIÇOS
  // =============================

  servicos: ServicoFaccao[] = [

    {
      nome: 'Costura',
      valor: 4.80,
      tempo: '2 dias'
    },

    {
      nome: 'Bordado',
      valor: 6.20,
      tempo: '3 dias'
    }

  ];

  // =============================
  // PEÇAS ENVIADAS
  // =============================

  pecasEnviadas = [

    {

      of: 2587,
      produto: 'Camiseta',
      referencia: 'REF-125',
      quantidade: 500,
      envio: '10/07/2026',
      prazo: '20/07/2026',
      status: 'Em Produção'

    }

  ];

  // =============================
  // RECEBIMENTO
  // =============================

  recebimento = {

    quantidadeRecebida: 0,
    quantidadeDefeito: 0,
    quantidadePerdida: 0,
    qualidade: 'OK'

  };

  // =============================
  // CUSTOS
  // =============================

  custos = {

    valorUnitario: 0,
    frete: 0,
    retrabalho: 0,
    custoTotal: 0

  };

  // =============================
  // ATRASOS
  // =============================

  atrasos = [

    {

      of: 2587,
      faccao: 'Costura São José',
      prazo: '20/07/2026',
      dias: 3,
      status: 'Atrasada'

    }

  ];

  // =============================
  // MÉTODOS
  // =============================

  novaFaccao(): void {

    console.log('Nova Facção');

  }

  novaRemessa(): void {

    console.log('Nova Remessa');

  }

  novoRecebimento(): void {

    console.log('Novo Recebimento');

  }

  exportar(): void {

    console.log('Exportando...');

  }

  pesquisar(): void {

    console.log('Pesquisar');

    console.log(this.pesquisa);
    console.log(this.numeroOF);
    console.log(this.status);
    console.log(this.data);

  }

  salvarCadastro(): void {

    console.log(this.faccao);

  }

  editarServico(servico: ServicoFaccao): void {

    console.log(servico);

  }

  calcularTotal(): void {

    this.custos.custoTotal =
      this.custos.valorUnitario +
      this.custos.frete +
      this.custos.retrabalho;

  }

}
