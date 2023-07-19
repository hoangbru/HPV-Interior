import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'https://hpv-interior-api.vercel.app/api/'; 

  constructor(private http: HttpClient) { }
  getAllStatus():Observable<IStatus[]>{
    return this.http.get<IStatus[]>(`${this.apiUrl}status`)
  }
}
