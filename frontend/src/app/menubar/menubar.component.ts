import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ProductTile } from '../product-tile';
import { MinicartComponent } from '../minicart/minicart.component'; 
import { OverlayModule } from 'primeng/overlay';
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

  showDialog() {
    this.overlayVisible = !this.overlayVisible;
  }
}
