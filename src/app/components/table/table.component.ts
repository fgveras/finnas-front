import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'finnas-table',
  standalone: true,
  imports: [],
  template: `
    <div class="col-12 table-component">
        <table class="table table-hover table-striped table-component">
            <thead class="table-header">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Título</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Credor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@social</td>
                </tr>
            </tbody>
        </table>
    </div>
  `,
  styles: `
    .table-component {
        display: inline;
        width: 100%;
    }
  `
})
export class FinnasTableComponent {

  @Input() pageTitle: string = '';
  @Input() mainButtonTitle: string = '';

  @Output() mainButtonClicked: EventEmitter<void> = new EventEmitter<void>(); 
}