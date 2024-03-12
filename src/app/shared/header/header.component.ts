import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusquedaComponent } from "../busqueda/busqueda.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styles: '',

    imports: [
        CommonModule, RouterModule,
        BusquedaComponent
    ]
})
export class HeaderComponent { }
