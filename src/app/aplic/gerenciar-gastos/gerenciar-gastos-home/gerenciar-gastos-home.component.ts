import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FinnasTableComponent } from '../../../components/table/table.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-gerenciar-gastos-home.component',
  imports: [HeaderComponent, CurrencyPipe],
  templateUrl: './gerenciar-gastos-home.component.html',
  styleUrl: './gerenciar-gastos-home.component.scss',
})
export class GerenciarGastosHomeComponent {
 
  public pageTitle: string = "Gerencimaneto de Gastos";

  public list = [ 
    { id: 1, codigo: '1', titulo: 'Nubank', valor: 101.39 }
    , { id: 2, codigo: '2', titulo: 'Banrisul', valor: 1401.09 }
    , { id: 3, codigo: '3', titulo: 'Natália', valor: 984.51 }
  ];

  teste(){
    alert('oi')
  }
}
