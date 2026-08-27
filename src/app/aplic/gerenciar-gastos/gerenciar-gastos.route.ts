
import { Routes } from '@angular/router';
import { NovoGastoComponent } from './gerenciar-gastos-form/gerenciar-gastos-form.component';
import { GerenciarGastosHomeComponent } from './gerenciar-gastos-home/gerenciar-gastos-home.component';

export const GERENCIAR_GASTOS_ROUTES: Routes = [
  {path: '', title:'Gerenciar Gastos', component: GerenciarGastosHomeComponent},
  {path: 'novo', title:'Novo Gasto', component: NovoGastoComponent}
];