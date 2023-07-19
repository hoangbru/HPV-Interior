import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss']
})
export class ToolBoxComponent {
  listProduct: IProduct[] = [];
  pages!: any;
  constructor(
    private productService: ProductService
  ) {
    this.productService.getAllProducts().subscribe((data:any) =>{
      this.listProduct = data.data.length
      this.pages = data.pagination
    })
  }
}
