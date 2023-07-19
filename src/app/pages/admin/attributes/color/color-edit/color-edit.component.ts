import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { Router ,ActivatedRoute } from '@angular/router';
import { IColor } from 'src/app/interfaces/color';
import { CustomValidators } from './custom-validators';


@Component({
  selector: 'app-color-edit',
  templateUrl: './color-edit.component.html',
  styleUrls: ['./color-edit.component.scss']
})
export class ColorEditComponent {
  color!: IColor
  constructor (
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.colorService.getColor(id).subscribe(data => {
        this.color = data;
        this.ColorForm.patchValue({
          name: data.name,
          hex: data.hex,
        });
      });
    });
  }
 ColorForm = this.formBuilder.group({
    name: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(15), CustomValidators.nameValidator()]],
    hex: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(15), CustomValidators.nameValidator()]],
  })
  
  onHandleSubmit(){
    if(this.ColorForm.valid){
      const color = {
        _id:this.color._id,
       name: this.ColorForm.value.name || "",
       hex : this.ColorForm.value.hex || ""
      }
      this.colorService.editColor(color).subscribe( data =>{
        console.log(data);
        alert('Cập nhật màu thành công')
        this.router.navigate(['/admin/color']);
      })
    }
  }
}
