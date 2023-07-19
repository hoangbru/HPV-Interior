import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 

  constructor(
    private http:HttpClient,
    private authService: AuthService) { }
 
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.apiUrl}products`)
  }
  getProductById(id: number | string):Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}products` + `/${id}`)
  }
  getProductBySlug(slug:string):Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}product/${slug}`)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    const token = this.authService.getToken();

    // Tạo headers và thêm token vào headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<IProduct>(`${this.apiUrl}products`, product, { headers })
  }
  editProduct(product: IProduct): Observable<IProduct>{
    const token = this.authService.getToken();

    // Tạo headers và thêm token vào headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<IProduct>(`${this.apiUrl}products` + `/${product._id}`, product, { headers })
  }
  deleteProduct(id :any): Observable<IProduct>{
    const token = this.authService.getToken();

    // Tạo headers và thêm token vào headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<IProduct>(`${this.apiUrl}products` +  `/${id}`, { headers })
  }
  getProductsByCategoryId(categoryId: number): Observable<IProduct[]> {
    const url = `${this.apiUrl}products?_expand=${categoryId}`;
    return this.http.get<IProduct[]>(url);
  }
}
