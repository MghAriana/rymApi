import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusquedaComponent { }
