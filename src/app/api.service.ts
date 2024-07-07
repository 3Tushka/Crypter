import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getData() {
    this.auth.idTokenClaims$.subscribe((claims) => {
      const jwtToken = claims?.__raw;
      if (jwtToken) {
        console.log(jwtToken);
        const headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${jwtToken}`
        );
        this.http
          .get('http://localhost:3500', { headers })
          .subscribe((response) => {
            console.log(response);
          });
      }
    });
  }
}
