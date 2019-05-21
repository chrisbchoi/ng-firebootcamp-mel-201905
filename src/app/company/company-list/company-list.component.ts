import {CompanyService} from './../company.service';
import {Component, OnInit} from '@angular/core';
import {Company} from './company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  constructor(private companySvc: CompanyService) {}

  companies: Company[];

  ngOnInit() {
    this.companySvc.getCompanies().subscribe(c => {
      this.companies = c;
    });
  }
}
