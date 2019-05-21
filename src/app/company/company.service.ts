import {environment} from './../../environments/environment.prod';
import {Company} from './company-list/company';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {errorHandler} from '@angular/platform-browser/src/browser';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private httpClient: HttpClient) {}
  // API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';
  API_BASE = environment.API_BASE;

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`).pipe(
      tap(x => console.log('TAP - Service', x)),
      catchError(e => this.errorHandler<Company[]>(e)),
    );
  }

  deleteCompany(company: Company): Observable<Company> {
    console.log('Delete Company', company.id);
    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${company.id}`)
      .pipe(
        // retry(10),
        tap(c => console.log('HttpClient.delete called')),
        catchError(this.errorHandling),
      );
  }
  errorHandling(error: Error): Observable<any> {
    // TODO: Implement proper error handler (Toaster...)
    console.error('ERROR', error);

    return new Observable();
  }
  private errorHandler<T>(error: Error): Observable<T> {
    console.error('implement custom errort handler here', error);
    return new Observable<T>();
  }
}
