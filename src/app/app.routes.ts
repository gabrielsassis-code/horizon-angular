import { Routes } from '@angular/router';
import { Aulas } from './pages/aulas/aulas';
import { Contatos } from './pages/contatos/contatos';
import { Inicio } from './pages/inicio/inicio';
import { Parcerias } from './pages/parcerias/parcerias';
import { Planos } from './pages/planos/planos';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: Inicio, title: 'Início | Academia Horizonte' },
  { path: 'aulas', component: Aulas, title: 'Aulas | Academia Horizonte' },
  { path: 'sobre', component: Sobre, title: 'Sobre | Academia Horizonte' },
  { path: 'planos', component: Planos, title: 'Planos | Academia Horizonte' },
  { path: 'parcerias', component: Parcerias, title: 'Parcerias | Academia Horizonte' },
  { path: 'contatos', component: Contatos, title: 'Contato | Academia Horizonte' },
  { path: '**', redirectTo: 'inicio' },
];
