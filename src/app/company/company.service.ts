import { environment } from './../../environments/environment.prod';
import { Company } from './company-list/company';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { errorHandler } from '@angular/platform-browser/src/browser';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private httpClient: HttpClient) { }
  // API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';
  API_BASE = environment.API_BASE;

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
      .pipe(
        // retry(10),
        catchError(this.errorHandling),
      );
  }

  deleteCompany(company: Company): Observable<Company> {
    console.log("Delete Company", company.id);
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${company.id}`)
      .pipe(
        // retry(10),
        tap(c => console.log("HttpClient.delete called")),
        catchError(this.errorHandling),
      );
  }

  addCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(
      `${this.API_BASE}/company`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(e => this.errorHandling(e)));
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(e => this.errorHandling(e)));
  }


  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${this.API_BASE}/company/${company.id}`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(e => this.errorHandling(e)));

  }
  errorHandling(error: Error): Observable<any> {
    // TODO: Implement proper error handler (Toaster...)
    console.error('ERROR', error);

    return new Observable();
  }
}
