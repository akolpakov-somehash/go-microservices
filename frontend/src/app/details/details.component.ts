import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductTile } from '../product-tile';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="'assets/products/'+productTile?.image"
      alt="Exterior photo of {{productTile?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{productTile?.name}}</h2>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  productTile: ProductTile | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const productId = parseInt(this.route.snapshot.params['id'], 10);
    this.productService.getProductById(productId).then(productTile => {
      this.productTile = productTile;
    });
  }

  submitApplication() {
    this.productService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}