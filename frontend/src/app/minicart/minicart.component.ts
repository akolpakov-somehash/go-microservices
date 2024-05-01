import { Component, Input, inject } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { ProductQuote } from '../product-tile';
import { ButtonModule } from 'primeng/button';
import { OrderService } from '../order.service';
import { CartOverlayService } from '../cartoverlay.service';


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
  private alive = true;
  cartOverlayService: CartOverlayService = inject(CartOverlayService);
  orderService: OrderService = inject(OrderService);

  customerId: number = 1;

  async placeOrder(customerId: number) {
    this.cartOverlayService.setOverlayVisible(false);
    try {
      for await (let chunk of this.orderService.streamOrders(this.customerId)) {
        if (!this.alive) break;
        console.log(chunk); // Outputs each chunk of data as it arrives
      }
    } catch (error) {
      console.error("Error during stream processing:", error);
    }

  }

  ngOnDestroy() {
    this.alive = false; // Ensures the async loop is stopped when the component is destroyed
  }
}
