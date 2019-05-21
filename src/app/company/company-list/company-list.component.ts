import {Component, OnInit, OnDestroy} from '@angular/core';
import {CompanyService} from '../company.service';
import {Observable} from 'rxjs';
import {Company} from './company';

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
}
