import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { Router } from '@angular/router';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.scss']
})
export class ColorAddComponent {
  constructor (
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private router: Router
  ){

  }
 ColorForm = this.formBuilder.group({
    name: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(15), CustomValidators.nameValidator()]],
    hex: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(15), CustomValidators.nameValidator()]],
  })


  onHandleSubmit(){
    if(this.ColorForm.valid){
      const color = {
       name: this.ColorForm.value.name || "",
       hex : this.ColorForm.value.hex || ""
      }
      this.colorService.addColor(color).subscribe( data =>{
        console.log(data);
        alert('them mau thnah cong')
        this.router.navigate(['/admin/color']);
      })
    }
  }
}
