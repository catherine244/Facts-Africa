import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient,) { 
    
  }
  getInvoices() {
    return this.http.get<any>(`${environment.apiUrl}/invoice`);
  }
  getBuyerInvoices() {
    return this.http.get<any>(`${environment.apiUrl}/buyer/invoices`);
  }

  // http://factsafrika.herokuapp.com/api/users/buyers
  // postInvoices(): Observable<any> {
  //   return this.http.post(this.API,{ headers: this.headers},invoicedata)
  // }
}