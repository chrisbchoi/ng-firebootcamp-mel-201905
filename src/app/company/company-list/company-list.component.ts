import {Component, OnInit, OnDestroy} from '@angular/core';
import {CompanyService} from '../company.service';
import {Observable} from 'rxjs';
import {Company} from './company';
import {map} from 'rxjs/operators';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  constructor(private companySvc: CompanyService) {}

  companies$: Observable<Company[]>;

  ngOnInit() {
    this.companies$ = this.companySvc.getCompanies();
  }
  deleteCompany(company: Company) {
    const a$: Observable<Company> = this.companySvc.deleteCompany(company);
    a$.subscribe(c => (this.companies$ = this.companySvc.getCompanies()));
  }

  getCompanies() {
    return this.companySvc
      .getCompanies()
      .pipe(map(c => c.sort((a, b) => a.name.localeCompare(b.name))));
  }
}
