import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FinnasTableComponent } from '../../../components/table/table.component';
import { CurrencyPipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, Legend, plugins, registerables } from 'chart.js';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-gerenciar-gastos-home.component',
  imports: [HeaderComponent, CurrencyPipe, BaseChartDirective],
  templateUrl: './gerenciar-gastos-home.component.html',
  styleUrl: './gerenciar-gastos-home.component.scss',
})
export class GerenciarGastosHomeComponent {
 
  constructor(
    private _router: Router
  ){}

  public pageTitle: string = "Gerencimaneto de Gastos | Agosto/2026";
  public data = {
    labels: [
      'Nubank',
      'Banrisul',
      'Natália'
    ],
    datasets: [{
      label: 'R$',
      data: [101.39, 1401.09, 984.51],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
    }]
  }

  public list = [ 
    { id: 1, codigo: '1', titulo: 'Nubank', valor: 101.39 }
    , { id: 2, codigo: '2', titulo: 'Banrisul', valor: 1401.09 }
    , { id: 3, codigo: '3', titulo: 'Natália', valor: 984.51 }
  ];    

  novoGasto(): void {
    this._router.navigate(['/gerenciar-gastos/novo'])
  }
}