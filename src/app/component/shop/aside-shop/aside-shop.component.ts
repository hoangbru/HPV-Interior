import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { IColor } from 'src/app/interfaces/color';
import { ISize } from 'src/app/interfaces/size';
import { CategoryService } from 'src/app/services/category.service';
import { ColorService } from 'src/app/services/color.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-aside-shop',
  templateUrl: './aside-shop.component.html',
  styleUrls: ['./aside-shop.component.scss']
})
export class AsideShopComponent {
  categoriesList!:ICategory[];
  colorList!:IColor[];
  sizeList!:ISize[];
  constructor(
    private categoryService: CategoryService,
    private colorService: ColorService,
    private sizeService: SizeService
  ) {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categoriesList = data
    })
    this.colorService.getAllColor().subscribe(data => {
      this.colorList = data
    })
    this.sizeService.getAllSize().subscribe(data => {
      this.sizeList = data
    })
  }

}
