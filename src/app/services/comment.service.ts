import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IComment } from '../interfaces/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
    addcomment(comment :IComment):Observable<IComment>{
      return this.http.post<IComment>(`${this.apiUrl}comment`,comment)
    }
    getAllcomment():Observable<IComment[]>{
      return this.http.get<IComment[]>(`${this.apiUrl}comment`)
    }
    getcommentByIdProducts(id :string):Observable<IComment>{
      return this.http.get<IComment>(`${this.apiUrl}comment/${id}`)
    }
    getOneComment(id :string):Observable<IComment>{
      return this.http.get<IComment>(`${this.apiUrl}comment/${id}/detail`)
    }
    editcomment(comment:IComment):Observable<IComment>{
      return this.http.patch<IComment>((`${this.apiUrl}comment/`)+ `${comment._id}`, comment)
    }
    removeComment(id:number):Observable<IComment>{
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete<IComment>(`${this.apiUrl}comment/${id}`,{headers})
    }
    forceComment(id:number):Observable<IComment>{
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete<IComment>(`${this.apiUrl}comment/${id}/force`,{headers})
    }
}
