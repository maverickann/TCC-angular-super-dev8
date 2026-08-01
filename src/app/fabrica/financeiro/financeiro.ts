
import { FabricaHeader } from '../fabrica-header/fabrica-header';
import { AfterViewInit, Component } from '@angular/core';
import {
  Chart,
  registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-financeiro',
   imports: [FabricaHeader],
  templateUrl: './financeiro.html',
  styleUrls: ['./financeiro.scss']
})
export class Financeiro implements AfterViewInit {

  ngAfterViewInit(): void {
    this.graficoReceita();
    this.graficoPizza();
    this.graficoFluxo();
    this.graficoOF();
    this.graficoCustoSetor();
    this.graficoPizzaCustos();
    this.graficoLinhaOF();
  }

  graficoReceita() {

    new Chart('graficoReceita', {
      type: 'bar',
      data: {
        labels: ['Jan','Fev','Mar','Abr','Mai','Jun'],
        datasets: [
          {
            label: 'Receita',
            data: [420,480,510,460,530,520],
            backgroundColor: '#28a745'
          },
          {
            label: 'Despesas',
            data: [260,300,330,280,310,312],
            backgroundColor: '#dc3545'
          }
        ]
      },
      options:{
        responsive:true
      }
    });

  }

  graficoPizza(){

    new Chart('graficoPizza',{
      type:'pie',
      data:{
        labels:[
          'Tecidos',
          'Facções',
          'Funcionários',
          'Transporte',
          'Outros'
        ],
        datasets:[{
          data:[40,25,20,10,5],
          backgroundColor:[
            '#2196f3',
            '#ff9800',
            '#4caf50',
            '#9c27b0',
            '#607d8b'
          ]
        }]
      }
    });

  }

  graficoFluxo(){

    new Chart('graficoFluxo',{
      type:'line',
      data:{
        labels:[
          'Jan','Fev','Mar','Abr','Mai','Jun',
          'Jul','Ago','Set','Out','Nov','Dez'
        ],
        datasets:[{
          label:'Fluxo de Caixa',
          data:[
            40,55,62,58,70,82,
            90,84,92,105,112,120
          ],
          borderColor:'#1976d2',
          backgroundColor:'rgba(25,118,210,.2)',
          fill:true,
          tension:.3
        }]
      }
    });

  }

  graficoOF(){

    new Chart('graficoOF',{
      type:'bar',
      data:{
        labels:[
          'OF 2581',
          'OF 2582',
          'OF 2583',
          'OF 2584',
          'OF 2585',
          'OF 2586',
          'OF 2587'
        ],
        datasets:[{
          label:'Custo (R$ mil)',
          data:[
            42,
            38,
            47,
            53,
            41,
            49,
            58
          ],
          backgroundColor:'#00bcd4'
        }]
      }
    });

  }

  graficoCustoSetor(){

    new Chart('graficoCustoSetor',{
      type:'bar',
      data:{
        labels:[
          'Tecido',
          'Modelagem',
          'Corte',
          'Costura',
          'Acabamento',
          'Expedição'
        ],
        datasets:[{
          label:'Custo',
          data:[
            18500,
            3200,
            6900,
            24800,
            8400,
            2300
          ],
          backgroundColor:[
            '#1565c0',
            '#43a047',
            '#ff9800',
            '#e53935',
            '#8e24aa',
            '#546e7a'
          ]
        }]
      }
    });

  }

  graficoPizzaCustos(){

    new Chart('graficoPizzaCustos',{
      type:'doughnut',
      data:{
        labels:[
          'Tecido',
          'Modelagem',
          'Corte',
          'Costura',
          'Acabamento',
          'Expedição'
        ],
        datasets:[{
          data:[
            18500,
            3200,
            6900,
            24800,
            8400,
            2300
          ],
          backgroundColor:[
            '#1565c0',
            '#43a047',
            '#ff9800',
            '#e53935',
            '#8e24aa',
            '#546e7a'
          ]
        }]
      }
    });

  }

  graficoLinhaOF(){

    new Chart('graficoLinhaOF',{
      type:'line',
      data:{
        labels:[
          'Planejamento',
          'Modelagem',
          'Corte',
          'Costura',
          'Acabamento',
          'Entrega'
        ],
        datasets:[{
          label:'Custo acumulado',
          data:[
            5000,
            9000,
            18000,
            43000,
            56000,
            58700
          ],
          borderColor:'#4caf50',
          backgroundColor:'rgba(76,175,80,.2)',
          fill:true,
          tension:.4
        }]
      }
    });

  }

}