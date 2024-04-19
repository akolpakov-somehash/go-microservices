import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTile } from '../product-tile';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="productTile.image" alt="Exterior photo of {{productTile.name}}">
    <h2 class="listing-heading">{{ productTile.name }}</h2>
    <a [routerLink]="['/details', productTile.id]">Learn More</a>
  </section>
`,
  styleUrl: './product-tile.component.css'
})
export class ProductTileComponent {
  @Input() productTile!: ProductTile;
}
