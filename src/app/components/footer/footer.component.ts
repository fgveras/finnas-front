import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer-body">
        <div>
            <label for="" class="d-flex justify-content-center"> Made by Ravenna </label>
        </div>
    </footer>
  `,
  styles: `
    .footer-body{        
        margin-top: 10px; 
        margin-bottom: 10px;
        border: 2px solid rgb(46, 45, 45);
        border-radius: 5px;
        padding: 10px;
        background-color: rgb(53, 52, 52);
    }
  `
})
export class FooterComponent {}