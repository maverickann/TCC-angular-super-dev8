import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarrinhoService } from '../servicos/carrinho.service';
import { UsuarioService } from '../servicos/usuario.service';
import { TemaService } from '../servicos/tema.service';
import { RodapeComponent } from '../rodape/rodape.component';

// =============================================
// PÁGINA DO CARRINHO DE COMPRAS
// Inspirada em e-commerce tipo Kabum (versão simples):
// lista de produtos à esquerda com botões de + e −,
// e um resumo do pedido à direita com o total e o frete.
// Pra FINALIZAR a compra é preciso estar logado — se não
// estiver, a página manda o usuário pra tela de login.
// =============================================
@Component({
  selector: 'app-carrinho',
  imports: [RodapeComponent, RouterLink], // rodapé compartilhado + links de rota
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnDestroy {

  // mensagem que aparece quando a compra é finalizada com sucesso
  compraFinalizada = false;

  // aviso que aparece se tentar finalizar sem estar logado
  avisoLogin = false;

  // guarda o "número" do timer do redirecionamento pro login,
  // pra poder cancelar se o usuário sair da página antes dos 2 segundos
  private timerLogin: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private router: Router,
    public carrinho: CarrinhoService, // public pra usar direto no HTML
    public usuario: UsuarioService,
    public tema: TemaService
  ) {}

  // Regra de frete (igual as lojas fazem):
  // compras acima de R$ 399 têm frete grátis, senão custa R$ 29,90
  valorFrete(): number {
    if (this.carrinho.itens.length === 0) {
      return 0;
    }
    return this.carrinho.valorProdutos() >= 399 ? 0 : 29.90;
  }

  // total geral = produtos + frete
  valorTotal(): number {
    return this.carrinho.valorProdutos() + this.valorFrete();
  }

  // Botão FINALIZAR COMPRA — aqui entra a validação de usuário:
  // só deixa concluir se tiver alguém logado no site.
  finalizarCompra() {
    if (!this.usuario.estaLogado()) {
      // se o aviso já está na tela, ignoro cliques repetidos no botão
      if (this.avisoLogin) {
        return;
      }

      // mostra o aviso e leva pra tela de login depois de 2 segundos.
      // O "retorno=carrinho" na URL avisa o login pra voltar pra cá.
      this.avisoLogin = true;
      this.timerLogin = setTimeout(() => {
        this.router.navigate(['/login'], { queryParams: { retorno: 'carrinho' } });
      }, 2000);
      return;
    }

    // usuário logado: "conclui" o pedido e esvazia o carrinho
    this.carrinho.limpar();
    this.compraFinalizada = true;
  }

  // Chamado pelo Angular quando o usuário sai desta página.
  // Cancelo o timer pra ele não "puxar" a pessoa pro login
  // depois que ela já decidiu ir pra outro lugar do site.
  ngOnDestroy() {
    if (this.timerLogin !== null) {
      clearTimeout(this.timerLogin);
    }
  }

  // Formata o número como moeda brasileira: 349.9 → R$ 349,90
  formatarPreco(preco: number): string {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // usado pelos botões "CONTINUAR COMPRANDO" e "IR PARA O CATÁLOGO"
  irParaCatalogo() {
    this.router.navigate(['/catalogo']);
  }
}
