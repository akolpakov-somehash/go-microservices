import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { ProductService } from '../product.service';
import { ProductTile } from '../product-tile';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [
    CommonModule,
    ProductTileComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by name" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-product-tile *ngFor="let productTile of filteredTileList" [productTile]="productTile"></app-product-tile>
  </section>
  `,
  styleUrl: './product-grid.component.css'
})

export class HomeComponent {
  ProductTileList: ProductTile[] = [];
  filteredLocationList: ProductTile[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllProducts().then((ProductTileList: ProductTile[]) => {
      this.ProductTileList = ProductTileList;
      this.filteredLocationList = ProductTileList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.ProductTileList;
      return;
    }
  
    this.filteredLocationList = this.ProductTileList.filter(
      ProductTile => ProductTile?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

}
