import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IOrder } from '../interfaces/order';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
    addOrder(orders :IOrder):Observable<IOrder>{
      return this.http.post<IOrder>(`${this.apiUrl}order`,orders)
    }
    getAllOrder():Observable<IOrder[]>{
      return this.http.get<IOrder[]>(`${this.apiUrl}order`)
    }
    getOrderByIdUser(id :string):Observable<IOrder>{
      return this.http.get<IOrder>(`${this.apiUrl}order/user/${id}`)
    }
    getOrderById(id :string):Observable<IOrder>{
      return this.http.get<IOrder>(`${this.apiUrl}order/${id}`)
    }
    editOrder(order:IOrder):Observable<IOrder>{
      const token = this.authService.getToken();
  
      // Tạo headers và thêm token vào headers
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.patch<IOrder>((`${this.apiUrl}order/`)+ `${order._id}`, order, { headers })
    }
}
