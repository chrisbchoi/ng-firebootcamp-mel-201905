import {Company} from './../company-list/company';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
})
export class CompanyTableComponent implements OnInit {
  @Input()
  companies: Company[];

  @Output()
  deleteClicked: EventEmitter<Company> = new EventEmitter();

  constructor() {}

  deleteCompany(company: Company) {
    this.deleteClicked.emit(company);
  }

  ngOnInit() {}
}
