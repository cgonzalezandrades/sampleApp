import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class TicketsService {
    constructor(private http: HttpClient) {}

    public getTickets() {
        return this.http.get(`http://localhost:8080/tickets`);
    }
}
