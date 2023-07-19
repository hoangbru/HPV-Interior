import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/'; // Thay đổi URL tới server của bạn

  constructor(private http: HttpClient) {}

  // Hàm gửi HTTP request với token trong headers
  sendRequestWithToken() {
    // Lấy token từ nơi lưu trữ (ví dụ: localStorage)
    const token = localStorage.getItem('accessToken');

    // Tạo headers và thêm token vào headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Gửi request với headers chứa token
    return this.http.get(this.apiUrl, { headers });
  }
}
