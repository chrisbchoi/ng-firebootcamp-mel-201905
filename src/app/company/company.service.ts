import {environment} from './../../environments/environment.prod';
import {Company} from './company-list/company';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private httpClient: HttpClient) {}
  // API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';
  API_BASE = environment.API_BASE;

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`).pipe(
      // retry(3),
      catchError(this.errorHandler),
    );
  }

  private errorHandler(error: Error): Observable<Company[]> {
    console.error('implement custom errort handler here', error);
    return new Observable<Company[]>();
  }
}
