import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICategory } from '../interfaces/category';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

    // add
  addCategory(category:ICategory):Observable<ICategory>{
    const token = this.authService.getToken();

    // Tạo headers và thêm token vào headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ICategory>(`${this.apiUrl}categories`, category, { headers })
  }
  //  lấy 1
  getCategory(id:string):Observable<ICategory>{
    return this.http.get<ICategory>(`${this.apiUrl}categories` + `${id}`)
  }
  // lấy tất cả
  getAllCategory():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${this.apiUrl}categories`)
  }
  // sủa category
  editCategory(category:ICategory):Observable<ICategory>{
    const token = this.authService.getToken();

    // Tạo headers và thêm token vào headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<ICategory>(`${this.apiUrl}categories` + `${category._id}`, category, { headers })
  }
  // xoa
  deleteCategory(id:any):Observable<ICategory>{
    const token = this.authService.getToken();

    // Tạo headers và thêm token vào headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<ICategory>(`${this.apiUrl}categories` + `${id}`, { headers })
  }

  getProductsByCategoryId(id:number | undefined):Observable<IProduct[]>{
    const url = `${this.apiUrl}products?_expand=${id}`;
    return this.http.get<IProduct[]>(url)
  }

  deleteProduct(id :any): Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.apiUrl}products/${id}`)
  }
}
