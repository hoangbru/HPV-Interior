import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent implements OnInit {
  idUser=this.authService.getID()
  infoUser!:IUser;
  selectedState: any = null;
  editInfoForm = this.formBuilder.group({
    username: ["",[Validators.required]],
    email: ["",[Validators.required]],
    address: ["",[Validators.required]],
    sdt: ["",[Validators.required]],
    gender: ["",[Validators.required]],
  })
  dropdownItems  = [
    { name: 'Male' },
    { name: 'Female' },
    { name: 'Unknown' },
  ];
  constructor (
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit():void {
   
    
    this.authService.getUser(this.idUser).subscribe(data => {     
       
      this.infoUser = data;
      this.editInfoForm.patchValue({
        username: data.username || "",
        email: data.email || "",
        address: data.address || "",
        sdt: data.sdt || "",
        gender: data.gender || ""
      })
    })
  }


  onHandleSubmit() {
    if(this.editInfoForm.valid){
      const info:IUser = {
        _id: this.infoUser._id,
        username: this.editInfoForm.value.username || "",
        email: this.editInfoForm.value.email || "",
        address: this.editInfoForm.value.address || "",
        sdt: this.editInfoForm.value.sdt || "",
        gender: this.editInfoForm.value.gender || "",
        password:this.infoUser.password || ''
      }
      console.log(info);
      
      this.authService.editUser(info).subscribe(data => {
        alert("Sửa thành công")
        console.log(data);
        
      })
    }
  }
}
