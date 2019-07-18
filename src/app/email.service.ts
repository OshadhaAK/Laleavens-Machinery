import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiURL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  sendEmail(data) {
    return this.httpClient.post(`${this.apiURL}/sendmail/`,data);
  }
}
