import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { ProductQuote } from '../product-tile';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-minicart',
  standalone: true,
  imports: [
    OrderListModule,
    DialogModule,
    ButtonModule,
  ],
  templateUrl: './minicart.component.html',
  styleUrl: './minicart.component.scss'
})
export class MinicartComponent {
  @Input() products!: ProductQuote[];

  customerId: number = 1;

  constructor(private cdr: ChangeDetectorRef) {}

  placeOrder(customerId: number) {
    console.log('Placing order...');
  }
}
