import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userForm = this.formBuilder.group({
    name:[null,[Validators.required,Validators.minLength(5)]] ,
    email:[null,[Validators.required, Validators.email]],
    password:[null, [Validators.required, Validators.pattern(/^(?=.*[A-Z]).{8,}$/)]],
    confirmPassword:[null, [Validators.required, Validators.pattern(/^(?=.*[A-Z]).{8,}$/)]]
  })

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private router:Router
  ){

  }
  onHanleSubmit(){
    try {
      if(this.userForm.valid){
        if(this.userForm.value.confirmPassword !== this.userForm.value.password){
         alert('password ko trung nhau')
        } else{
          const user :IUser ={
          
            username:this.userForm.value.name || "",
            email:this.userForm.value.email || "",
            password:this.userForm.value.password || "",
            confirmPassword:this.userForm.value.confirmPassword || "",
          
          }
          this.authService.signup(user).subscribe(
            (response :any) =>{
              alert('Đăng kí thành công');
            },
            (error) =>{
              console.error('đã xảy ra lỗi' , error);
            }
          )
        }
      }
    } catch (error :any) {
      console.log(error.response.data);
      
    }
  }
}
