import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navigation-shop',
  templateUrl: './navigation-shop.component.html',
  styleUrls: ['./navigation-shop.component.scss']
})
export class NavigationShopComponent {
  pages!: any;
  constructor(
    private productService: ProductService
  ) {
    this.productService.getAllProducts().subscribe((data:any) =>{
      
      this.pages = data.pagination
      console.log(this.pages);
    })
  }
}
