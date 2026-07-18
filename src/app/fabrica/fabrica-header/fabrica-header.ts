import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-fabrica-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './fabrica-header.html',
  styleUrl: './fabrica-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabricaHeader {
  readonly pageTitle = input('Painel geral');
}
