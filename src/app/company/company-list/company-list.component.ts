import {Component, OnInit} from '@angular/core';
import {Company} from './company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  constructor() {}

  companies: Company[] = [
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

  ngOnInit() {}
}
