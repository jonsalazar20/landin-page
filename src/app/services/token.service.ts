import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private apiUrl = 'https://repoapi.ordenaris.com/api/candidato';
  private headers = new HttpHeaders({
    'ordProyecto': 'a6093c23ae10457c8t0b8b298fc8b500',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getToken(correo: string): Observable<any> {
    const data = { correo };
    return this.http.post<any>(this.apiUrl, data, { headers: this.headers });
  }

}
