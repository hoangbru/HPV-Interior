import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private AuthService:AuthService
    ) {}

  canActivate(): boolean {
    const userRole = this.AuthService.getRole(); // Lấy vai trò của người dùng từ localStorage hoặc nguồn dữ liệu khác

    if (userRole == 'admin') {
      return true; // Cho phép truy cập vào trang admin
    } else {
      this.router.navigate(['/']); // Chuyển hướng người dùng đến trang chủ hoặc trang khác
      return false; // Không cho phép truy cập vào trang admin
    }
  }
}
