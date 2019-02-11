import { Component, OnInit } from '@angular/core';
import {Invoice} from './invoice';
import { isNgTemplate } from '@angular/compiler';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  title: string = "Invoices";
  _listFilter: string;
  errorMessage: any ;
  filteredItems: Invoice[];
  items: Invoice[]=[];
  
  constructor(private invoiceService : InvoiceService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter= value;
    this.filteredItems = this._listFilter? this.performFilter(this.listFilter) : this.items;
  }

  performFilter(filterBy: string): Invoice[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((item: Invoice) => item.event.toLocaleLowerCase().indexOf(filterBy) != -1);
  }
  
  

  ngOnInit() {
   this.invoiceService.getInvoices().subscribe(
      items => {
        this.items = items;
        this.filteredItems = this.items;
      },
      error => this.errorMessage = <any>error
    );
    
  }

}
