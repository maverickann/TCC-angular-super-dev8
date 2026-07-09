import { Component } from '@angular/core';

// =============================================
// COMPONENTE DE RODAPÉ
// Criei o rodapé como um componente separado pra não
// precisar copiar e colar o mesmo HTML em todas as telas.
// Onde eu escrever <app-rodape></app-rodape>, ele aparece.
// =============================================
@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {

  // Lista das redes sociais da marca.
  // Deixei num array pra ficar fácil de adicionar ou tirar
  // uma rede depois — o HTML percorre essa lista sozinho.
  redesSociais = [
    { nome: 'Instagram', arroba: '@tessile.oficial', link: 'https://instagram.com/tessile.oficial' },
    { nome: 'YouTube',   arroba: '@tessileoficial',  link: 'https://youtube.com/@tessileoficial' },
    { nome: 'TikTok',    arroba: '@tessile.oficial', link: 'https://tiktok.com/@tessile.oficial' },
    { nome: 'X',         arroba: '@tessileoficial',  link: 'https://x.com/tessileoficial' }
  ];
}
