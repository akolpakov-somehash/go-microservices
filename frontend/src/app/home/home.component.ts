import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { ProductService } from '../product.service';
import { ProductTile } from '../product-tile';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductTileComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-product-tile *ngFor="let productTile of filteredTileList" [productTile]="productTile"></app-product-tile>
  </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  productTileList: ProductTile[] = [];
  filteredTileList: ProductTile[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllProducts().then((productTileList: ProductTile[]) => {
      this.productTileList = productTileList;
      this.filteredTileList = productTileList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredTileList = this.filteredTileList;
      return;
    }
  
    this.filteredTileList = this.filteredTileList.filter(
      productTile => productTile?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

}
