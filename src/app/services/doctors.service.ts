import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient , private tokenService: TokenService) { }

  correo = 'noe.aguilar@ordenaris.com'
  token = ''

  useToken () {
    this.tokenService.getToken(this.correo)
      .subscribe( res => this.token = res.uuid)
  }

  getDoctors(): Observable<any> {
    const url = 'https://repoapi.ordenaris.com/api/listaDoctores';
    const headers = new HttpHeaders()
      .append('ordProyecto', 'a6093c23ae10457c8t0b8b298fc8b500')
      .append('ordCandidato', this.token);

    return this.http.get(url, { headers });
  }
}
