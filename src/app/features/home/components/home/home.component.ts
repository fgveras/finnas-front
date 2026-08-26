import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink, DecimalPipe, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
  constructor(    
  ){}

  public userName: string = 'Fernando Gomes Veras'

  public saldoAtual: number = 200;
  public gastoMes: number = 200;
  public receitaMes: number = 200;
  public economiaMes: number = 200;

  redirect(){
    
  }
}
