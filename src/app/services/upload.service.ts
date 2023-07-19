import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }
  uploadImage(vals:any):Observable<any>{
    let data = vals
    return this.http.post(
      'https://api.cloudinary.com/v1_1/dxa8ks06k/image/upload',
      data
      )
  }
}
