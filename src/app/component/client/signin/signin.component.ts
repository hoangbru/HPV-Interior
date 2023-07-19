import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  userForm = this.formBuilder.group({
    email: [null,  [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  onHanleSubmit() {
    if (this.userForm.valid) {
      const user: IUser = {
        email: this.userForm.value.email || '',
        password: this.userForm.value.password || '',
      };
      this.authService.signin(user).subscribe((data :any) => { 
        this.authService.saveRole(data)
        const roles = data.user.role
        
        
        if (roles == 'admin') {
          location.href = "/admin"
        }else if (roles !== 'admin' ){
          location.href = "/"
        }                                        
        }
      );
    }
  }
}
