import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { Customer } from '../list/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private url = "/assets/customers.json";

    constructor(private httpClient : HttpClient) {

    }
    getCustomers(): Observable<Customer[]>{
        return this.httpClient.get<Customer[]>(this.url).pipe(
            tap(data => console.log('Customers: ' + JSON.stringify(data))),
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