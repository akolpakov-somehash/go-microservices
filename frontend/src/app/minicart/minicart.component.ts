import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { ProductTile } from '../product-tile';

@Component({
  selector: 'app-minicart',
  standalone: true,
  imports: [
    OrderListModule,
    DialogModule,

  ],
  templateUrl: './minicart.component.html',
  styleUrl: './minicart.component.scss'
})
export class MinicartComponent {
  @Input() products!: ProductTile[];

  constructor(private cdr: ChangeDetectorRef) {}
}
