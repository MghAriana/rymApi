import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-personajes.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaPersonajesComponent { }
