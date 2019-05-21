import {CompanyService} from './../company.service';
import {Component, OnInit} from '@angular/core';
import {Company} from './company';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  constructor(private companySvc: CompanyService) {}

  companies: Company[];

  ngOnInit() {
    this.companySvc
      .getCompanies()
      .pipe(tap(c => 'Tab got ${c.length} companies'))
      .subscribe(
        next => (this.companies = next),
        error => console.error('ERROR', error),
        () => console.log('COMPLETE'),
      );
  }
}
