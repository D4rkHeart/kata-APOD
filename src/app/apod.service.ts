import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApodService {
  private apiKey = 'DEMO_KEY';
  private apiUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getApod(date: string): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&date=${date}`;
    return this.http.get(url);
  }
}
