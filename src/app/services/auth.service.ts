import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 
  constructor(private http: HttpClient) {}
  // đăng nhập đăng kí
  signin(user: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>(`${this.apiUrl}signin`, user);
  }
  signup(user: IUser): Observable<IUser[]> {
    return this.http.post<IUser[]>(`${this.apiUrl}signup`, user);
  }
  // actions user
  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}users`);
  }
  removetUsers(id: any): Observable<IUser[]> {
    return this.http.delete<IUser[]>(`${this.apiUrl}users/${id}`);
  }
  getUser(id: any): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}users/${id}`);
  }
  editUser(user: IUser): Observable<IUser> {
    return this.http.patch<IUser>(
      `${this.apiUrl}users/${user._id}`,
      user
    );
  }

  saveRole(carts: any) {
    let roleJson = JSON.stringify(carts);
    // sessionStorage.setItem('cart',cartJson)
    localStorage.setItem('user', roleJson);
  }

  getRole(): any {
    const data = JSON.parse(localStorage?.getItem('user') as string);
    if (data) {
      const role = data.user.role;
      return role;
    } else {
      return null;
    }
  }

  getID() {
    const data = JSON.parse(localStorage?.getItem('user') as string);
    if (data) {
      const id = data.user._id;
      return id;
    } else {
      return null;
    }
  }
  getToken() {
    // Lấy token từ nơi lưu trữ (ví dụ: localStorage)
    const token = JSON.parse(localStorage.getItem('user')!)?.accessToken || null;
    return token;
  }
}
