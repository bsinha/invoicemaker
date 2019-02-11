import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from './invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  pageTitle: string =  "Invoice Detail";
  invoice: Invoice;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let id =  +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.invoice = {
      "id": "1",
      "event": "Abcd",
      "eventDate": "28-Jan-2019",
      "amount": "1234"
     
       
    }

  }

  
  onBack(): void {
    this.router.navigate(['/invoices']);
  }
}
