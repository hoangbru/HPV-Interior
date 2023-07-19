import { Component , Input} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { UploadService } from 'src/app/services/upload.service';
import { ISize } from 'src/app/interfaces/size';
import { SizeService } from 'src/app/services/size.service';
import { IColor } from 'src/app/interfaces/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss'],
  providers: [UploadService]
})
export class AdminProductAddComponent {
  // statusImg : boolean = false
  colorList!:IColor[];
  imageUploaded : any = null;
  files: File[] = [];
  ProductCateID!:any
  selectedState: any = null;
  sizeList!:ISize[];
  selectedSize:any[] = [];
  selectedColor:any[] = [];
  @Input() imageUrl!: string;
  productForm = this.formBuilder.group({
    code:["",[Validators.required]],
    name: ["",[Validators.required]],
    thumbnail:["",[Validators.required,]],
    quantity:[0,[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    importPrice:  [0,[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    price:[0,[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    description:["",[Validators.required]],
    categoryId:["",[Validators.required]],
    sizeId:[[], [Validators.required]],
    colorId:[[], [Validators.required]],
  })

  constructor(
    private productService: ProductService,
    private CategoryService:CategoryService,
    private sizeService:SizeService,
    private colorService:ColorService,
    private uploadService: UploadService,
    private formBuilder : FormBuilder,
    private redirect: Router
  ){
    this.CategoryService.getAllCategory().subscribe(data => {
      this.ProductCateID = data
    });
    this.sizeService.getAllSize().subscribe(data => {
      this.sizeList = data
    });
    this.colorService.getAllColor().subscribe(data => {
      this.colorList = data
    })
  }
  
  // add
  async onHandleSubmit(){

      const product: IProduct ={    
        code:this.productForm.value.code || "",
        name:this.productForm.value.name || "",
        thumbnail:this.imageUploaded|| "",
        quantity:this.productForm.value.quantity || 0,
        importPrice:this.productForm.value.importPrice || 0,
        price:this.productForm.value.price || 0,              
        description:this.productForm.value.description || "",
        categoryId: this.productForm.value.categoryId || "",
        sizeId: this.productForm.value.sizeId || [],
        colorId: this.productForm.value.colorId || [],
      }
      console.log(product);
      
      this.productService.addProduct(product).subscribe(product => {
        console.log(product);
        alert("Thêm thành công")
        this.redirect.navigate(["/admin/product"])
       
      })
 
  }
   onSelect(event:any) {
    
    this.files.push(...event.addedFiles);

    if(!this.files[0]) alert('Upload false');
    
      const file_data = this.files[0];
      const data = new FormData();
      data.append('file', file_data);
      data.append('upload_preset', 'angular-cloudinary');
      data.append('cloud_name', 'dxa8ks06k');
      this.uploadService.uploadImage(data).subscribe( async (res) => {
         this.imageUploaded = await res.secure_url; 
                  
      })
  }
    
    onRemove(event:any) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }
}
