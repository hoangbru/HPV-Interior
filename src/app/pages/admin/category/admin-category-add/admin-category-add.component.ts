import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { DateTime } from 'luxon';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent {
  selectedState: any = null;
  @Input() imageUrl!: string;
  categoryForm = this.formBuilder.group({
    name: ["",[Validators.required]],
  })


  // time
  currentDateTime: string;
  
  constructor(
    private CategoryService:CategoryService,
    private formBuilder : FormBuilder,
    private redirect: Router
  ){
    const vietnamTimeZone = 'Asia/Ho_Chi_Minh';
    const now = DateTime.now().setZone(vietnamTimeZone);
    this.currentDateTime = now.toFormat('yyyy-MM-dd HH:mm:ss');
    console.log(this.currentDateTime);
    
  }

  // add
  onHandleSubmit(){
    if(this.categoryForm.valid){
      const category: ICategory ={    
        name:this.categoryForm.value.name || "",
      }
      this.CategoryService.addCategory(category).subscribe(data => {
       console.log(data);
        alert("Thêm thành công")
        this.redirect.navigate(["/admin/category"])      
      })
    }
  }
}
