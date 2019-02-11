import { Component, OnInit } from '@angular/core';
import { Customer } from '../list/customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  title: string = "Customers";
  errorMessage: any;
  _listFilter: string;
  customers: Customer[];
  filteredCustomers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      items => {
        this.customers = items;
        this.filteredCustomers = this.customers;
      },
      error => this.errorMessage = <any>error
    );
  }

  get listFilter() : string {
    return this._listFilter;
  }
  set listFilter(listFilter: string) {
    this._listFilter = listFilter;
    this.filteredCustomers = this._listFilter? this.performFilter(this.listFilter) : this.customers;
  }

  performFilter(filterBy: string): Customer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.customers.filter((item: Customer) => item.name.toLocaleLowerCase().indexOf(filterBy) != -1);
  }
}
