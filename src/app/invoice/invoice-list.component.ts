import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { isNgTemplate } from '@angular/compiler';
import {Invoice} from './invoice';

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

   
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
