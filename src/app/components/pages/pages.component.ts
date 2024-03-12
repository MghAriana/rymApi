import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent { }
