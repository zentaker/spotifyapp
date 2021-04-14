import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');

  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    //realizar la peticion
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDfgsLmeFNTsjNyGM4Hi06W_2DIbk0cP6s6d1DTBFoY2fIUlVGL1xnjzxZV4OhdXQ146-43ABKXg5JC_sg'
    });

    //ejecuta el obserbable
    return this.http.get(url, { headers });
  }
  
  getNewReleases() {

    //envia el querypersonalizado y le devuelve el obserbable
    return this.getQuery('browse/new-releases')
      .pipe(map(data => { //es filtrado con el map
      return data['albums'].items;
    }));


  }
  getArtista(termino: string) {

    //envia un query personalizado y le devuelve el oobserbable
    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data => {
      return data['artists'].items;
    }));
    

  }
}