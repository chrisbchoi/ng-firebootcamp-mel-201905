import {CompanyService} from './../company.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Company} from './company';
import {tap, takeWhile} from 'rxjs/operators';
import {Subscription} from 'rxjs';
@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit, OnDestroy {
  constructor(private companySvc: CompanyService) {}
  componentExists = true;

  companies: Company[];
  ngOnDestroy(): void {
    this.componentExists = false;
  }

  ngOnInit() {
    this.companySvc
      .getCompanies()
      .pipe(
        takeWhile(c => this.componentExists),
        tap(c => console.log(`Tab got ${c.length} companies`)),
      )
      .subscribe(
        next => (this.companies = next),
        error => console.error('ERROR', error),
        () => console.log('COMPLETE'),
      );
  }
}
