import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonajesComponent { }
