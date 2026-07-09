import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // A rota de coleção tem um parâmetro (:estacao), então preciso
    // avisar o Angular quais valores existem pra ele conseguir gerar
    // as 4 páginas prontas na hora do build (prerender).
    path: 'colecao/:estacao',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { estacao: 'outono' },
        { estacao: 'inverno' },
        { estacao: 'primavera' },
        { estacao: 'verao' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
