import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template:` <input #inputSearch class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  `,
  styles:'',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusquedaComponent { }
