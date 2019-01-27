import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ClaimsService {
    constructor(private http: HttpClient) {}

    public getClaims() {
        return this.http.get(`http://localhost:8080/tickets`);
    }

    public saveNewClaim(body) {
        return this.http.post(`http://localhost:8080/tickets`, body);
    }

    public updateClaim(claimId, body) {
        return this.http.put(`http://localhost:8080/tickets/${claimId}`, body);
    }
}
