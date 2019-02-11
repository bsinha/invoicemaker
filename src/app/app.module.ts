import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { MaincenterComponent } from './maincenter/maincenter.component';
import { ListComponent } from './list/list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CompanyComponent,
    InvoiceComponent,
    HeaderbarComponent,
    FooterbarComponent,
    MaincenterComponent,
    ListComponent,
    CustomerListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: MaincenterComponent},
      {path: 'invoices', component: ListComponent},
      {path: 'invoices/:id', component: InvoiceComponent},
      {path: 'customers', component: CustomerListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
