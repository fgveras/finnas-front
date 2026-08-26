import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'finnas-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="d-flex justify-content-between">
      <h3> {{ pageTitle }} </h3>

      <div class="d-flex">
          <button [routerLink]="['/home']" class="btn btn-outline-primary">Voltar</button>
          <button (click)="mainButtonClicked.emit()" class="btn btn-outline-primary"> {{ mainButtonTitle }} </button>
      </div>
    </div>
  `,
  // styles: `
  //   .header-body{        
  //       margin-top: 10px; 
  //       margin-bottom: 10px;
  //       border: 2px solid rgb(46, 45, 45);
  //       border-radius: 5px;
  //       padding: 10px;
  //       background-color: rgb(53, 52, 52);
  //   }
  // `
})
export class HeaderComponent {

  @Input() pageTitle: string = '';
  @Input() mainButtonTitle: string = '';

  @Output() mainButtonClicked: EventEmitter<void> = new EventEmitter<void>(); 
}