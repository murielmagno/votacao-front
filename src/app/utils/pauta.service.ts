import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PautaService {
  private apiUrl = 'http://localhost:8089'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {
  }

  getPautas(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/pauta`);
  }
}
