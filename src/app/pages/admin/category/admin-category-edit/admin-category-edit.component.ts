import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { DateTime } from 'luxon';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss']
})
export class AdminCategoryEditComponent {
  selectedState: any = null;
  category!:ICategory
  categoryForm = this.formBuilder.group({
    name: ["",[Validators.required]],
  })


  // time
  
  constructor(
    private CategoryService:CategoryService,
    private formBuilder : FormBuilder,
    private redirect: Router,
    private route: ActivatedRoute,
  ){
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.CategoryService.getCategory(id).subscribe(data => {
        this.category = data;
        this.categoryForm.patchValue({
          name: data.name,
        });
      });
    });
  }

  // add
  onHandleSubmit(){
    if(this.categoryForm.valid){
      const category: ICategory ={    
        _id:this.category._id,
        name:this. categoryForm.value.name || "",
      }
      this.CategoryService.editCategory(category).subscribe(data => {
       console.log(data);
        alert("Sửa thành công")
        this.redirect.navigate(["/admin/category"])      
      })
    }
  }
}
