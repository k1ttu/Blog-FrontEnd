import { Blogpost } from './blogpost';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiIntegrationService {
  private apiUrl = 'https://blog-backend-blond-eight.vercel.app';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get<Blogpost[]>(`${this.apiUrl}/blogs`);
  }

  getBlogById(id: any): Observable<any> {
    return this.http.get<Blogpost>(`${this.apiUrl}/blogs/${id}`);
  }
}
