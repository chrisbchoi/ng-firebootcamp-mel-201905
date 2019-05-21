import {CompanyService} from './../company.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Company} from './company';
import {tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit, OnDestroy {
  constructor(private companySvc: CompanyService) {}
  sub: Subscription;

  companies: Company[];
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit() {
    this.sub = this.companySvc
      .getCompanies()
      .pipe(tap(c => console.log(`Tab got ${c.length} companies`)))
      .subscribe(
        next => (this.companies = next),
        error => console.error('ERROR', error),
        () => console.log('COMPLETE'),
      );
  }
}
