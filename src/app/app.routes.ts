import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title:'Home',
        loadComponent:()=>import('./components/pages/home/home.component'),
        /* children:[{

        }] */
    },
    {
        path:'lista-personajes',
        title:'Lista de personajes',
        loadChildren:()=>import('./components/pages/personajes/lista-personajes/lista-personajes.component'),
    },
    {
        path:'details/:id',
        title:'details',
        loadChildren:()=>import('./components/pages/personajes/details/details.component')
    },
    {
        path:'',
        redirectTo:'./components/pages/home/home.component',
        pathMatch:'full'
    }



];
