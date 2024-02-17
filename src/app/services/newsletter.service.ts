import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }
  correo = 'noe.aguilar@ordenaris.com';

sendNewsLetter(nombre: string, correo: string): Observable<any> {
    return this.tokenService.getToken(this.correo).pipe(
      switchMap(res => {
          const headers = new HttpHeaders({
          'ordProyecto': 'a6093c23ae10457c8t0b8b298fc8b500',
          'ordCandidato': res.uuid,
          'Content-Type': 'application/json'
        });

        const data = JSON.stringify({
          nombre,
          correo
        });

        const apiUrl = 'https://repoapi.ordenaris.com/api/mensaje';
        return this.http.post(apiUrl, data, { headers: headers });
      })
    );
  }
}
