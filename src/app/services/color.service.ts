import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColor } from '../interfaces/color';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  getAllColor():Observable<IColor[]>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IColor[]>(`${this.apiUrl}color`,{headers})
  }

  addColor(color:IColor):Observable<IColor>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<IColor>(`${this.apiUrl}color`,color,{headers})
  }

  editColor(color:IColor):Observable<IColor>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<IColor>(`${this.apiUrl}color/${color._id}`,color,{headers})
  }

  removeColor(id:number):Observable<IColor>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<IColor>(`${this.apiUrl}color/${id}`,{headers})
  }

  getColor(id:string | number):Observable<IColor>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IColor>(`${this.apiUrl}color/${id}`,{headers})
  }
}
