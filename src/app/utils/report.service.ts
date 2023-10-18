import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'http://localhost:8089';

  constructor(private http: HttpClient) {
  }

  generatePDFReport(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/gerar-pdf/votacao/${id}`, {responseType: 'blob' as 'json'});
  }

}
