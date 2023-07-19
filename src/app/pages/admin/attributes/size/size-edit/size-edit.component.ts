import { Component } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { SizeService } from 'src/app/services/size.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ISize } from 'src/app/interfaces/size';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-size-edit',
  templateUrl: './size-edit.component.html',
  styleUrls: ['./size-edit.component.scss']
})
export class SizeEditComponent {
  size!:ISize
  constructor (
    private formBuilder: FormBuilder,
    private sizeService: SizeService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.sizeService.getSize(id).subscribe(data => {
        this.size = data;
        this.SizeForm.patchValue({
          name: data.name,        
        });
      });
    });
  }
 SizeForm = this.formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), CustomValidators.nameValidator()]]
  })
  onHandleSubmit(){
    if(this.SizeForm.valid){
      const size = {
        name: this.SizeForm.value.name || ""
      }
      this.sizeService.addSize(size).subscribe(data =>{
        console.log(data);
        alert("Cập nhật size thành công")    
        this.router.navigate(['/admin/size']);   
      })
    }
  }
}
