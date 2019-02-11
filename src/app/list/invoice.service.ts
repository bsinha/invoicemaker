import { Injectable } from '@angular/core';
import { Invoice } from './invoice';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn : 'root'
})
export class InvoiceService {
    private url = "/assets/invoice.json";

    constructor(private httpClient : HttpClient) {

    }

    getInvoices() : Observable<Invoice[]> {
        return this.httpClient.get<Invoice[]>(this.url).pipe(
            tap(data => console.log('Data: ' +  JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = 'An error occurred: ${err.message}';
        } else {
            errorMessage = 'Server returned code: ${err.status}, message: ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}