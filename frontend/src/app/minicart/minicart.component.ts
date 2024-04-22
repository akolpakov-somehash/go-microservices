import { Component } from '@angular/core';
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
  products: ProductTile[] = [];
  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'green.jpg',
        description: 'Product 1 description',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'red.jpg',
        description: 'Product 2 description',
      },
    ];
  }
}
