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
    { nome: 'Instagram', arroba: '@urban.viluz', link: 'https://instagram.com/urban.viluz' },
    { nome: 'YouTube',   arroba: '@urbanviluz',  link: 'https://youtube.com/@urbanviluz' },
    { nome: 'TikTok',    arroba: '@urban.viluz', link: 'https://tiktok.com/@urban.viluz' },
    { nome: 'X',         arroba: '@urbanviluz',  link: 'https://x.com/urbanviluz' }
  ];
}
