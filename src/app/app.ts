import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';
import { CommonModule, NgFor } from '@angular/common'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderLayoutComponent, CurrencyPipe, UpperCasePipe, CommonModule, NgFor],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    products = [
      { name: 'table1', price: 200000, image: 'assets/images/product.png' },
      { name: 'table2', price: 400000, image: 'assets/images/product.png' },
      { name: 'table3', price: 550000, image: 'assets/images/product.png' },
      { name: 'table4', price: 300000, image: 'assets/images/product.png' }
    ];
}
