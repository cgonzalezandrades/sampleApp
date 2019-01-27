import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

 constructor(private http: HttpClient) {}

public postUser(body) {
        return this.http.post(`http://localhost:8080/users`, body);
    }
}
