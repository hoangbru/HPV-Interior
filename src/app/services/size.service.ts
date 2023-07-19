import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISize } from '../interfaces/size';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
    private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 

    constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }
  getAllSize():Observable<ISize[]>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ISize[]>(`${this.apiUrl}size`,{headers})
  }

  addSize(size:ISize):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ISize>(`${this.apiUrl}size`,size,{headers})
  }

  editSize(size:ISize):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<ISize>(`${this.apiUrl}size/${size._id}`,size,{headers})
  }

  removeSize(id:number):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<ISize>(`${this.apiUrl}size/${id}`,{headers})
  }

  getSize(id:number | string):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ISize>(`${this.apiUrl}size/${id}`,{headers})
  }
}
