import {Company} from './company-list/company';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor() {}

  getCompanies(): Company[] {
    return [
      {
        name: 'SSW',
        phone: 12345,
        email: 'info@ssw.com',
      },
      {
        name: 'Microsoft',
        phone: 12344,
        email: 'info@microsoft.com',
      },
      {
        name: 'Google',
        phone: 122145,
        email: 'info@google.com',
      },
    ];
  }
}
