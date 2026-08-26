import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";

@Component({
  selector: 'app-gerenciar-gastos-home.component',
  imports: [HeaderComponent],
  templateUrl: './gerenciar-gastos-home.component.html',
  styleUrl: './gerenciar-gastos-home.component.scss',
})
export class GerenciarGastosHomeComponent {
 
  public pageTitle: string = "Gerencimaneto de Gastos";

  teste(){
    alert('oi')
  }
}
