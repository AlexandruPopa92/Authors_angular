import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}
   getTasks() {
     return this._http.get('/api/author');
     }
   getOne(id) {
    return this._http.get(`/api/author/${id}`);
    }
 addNewTask(newauthor) {
   return this._http.post('/api/author', newauthor);
   }
  deleteOne(id) {
  return this._http.delete(`/api/author/${id}`);
  }
  updateOne(id,data) {
    return this._http.put(`/api/author/${id}`,data);
    }
}
