import { Component, inject, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ProductTile } from '../product-tile';
import { Quote, QuoteItem } from '../quote';
import { MinicartComponent } from '../minicart/minicart.component'; 
import { OverlayModule } from 'primeng/overlay';
import { ProductService } from '../product.service';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    MenubarModule,
    DialogModule,
    MinicartComponent,
    OverlayModule,
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {
  items: MenuItem[] | undefined;
  products: ProductTile[] = [];
  productService: ProductService = inject(ProductService);
  quoteService: QuoteService = inject(QuoteService);

  overlayVisible: boolean = false;


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Cart',
        icon: 'pi pi-fw pi-shopping-cart',
        styleClass: 'ml-auto',
        command: () => this.showDialog(),
      },
    ];
  }

  async showDialog() {
    const quote: Quote = await this.quoteService.getQuote();
    console.log('Quote:', quote);
    for (const item of quote.itemsList) {
      console.log('Item:', item);
      const product: ProductTile | undefined = await this.productService.getProductById(item.productid);
      if (product !== undefined) { // Check if product is not undefined
        this.products.push(product);
      }
    }
    this.overlayVisible = !this.overlayVisible;
}

}
