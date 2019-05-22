import {Company} from './../company-list/company';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
})
export class CompanyTableComponent implements OnInit {
  @Input()
  companies: Company[];
  constructor() {}

  ngOnInit() {}
}
