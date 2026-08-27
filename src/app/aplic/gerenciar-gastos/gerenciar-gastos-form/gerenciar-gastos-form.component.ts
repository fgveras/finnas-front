import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { Chart, Legend, plugins, registerables } from 'chart.js';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gerenciar-gastos-form.component',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './gerenciar-gastos-form.component.html',
  styleUrl: './gerenciar-gastos-form.component.scss',
})
export class NovoGastoComponent {

  constructor(){}

  form: FormGroup = new FormGroup({
    FlParcelado: new FormControl<boolean>(false),
    VlTotal: new FormControl<number | null>(0),   
    DtPrimeiraParcela: new FormControl<string | null>(null), 
    QtdParcelas: new FormControl<number>(0)
  })

  public isParcelado: boolean = false;
  public pageTitle: string = 'Novo Gasto';  
  public VlParcela: number = this.form.get('VlTotal')?.value / this.form.get('QtdParcelas')?.value;

  

}