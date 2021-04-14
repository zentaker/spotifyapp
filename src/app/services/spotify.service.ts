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
      'Authorization': 'Bearer BQDd8HrE7jUnKqg3SMkugpJItfTxWm72ElQOwWyuHxjK-SxFln4WFVXfMejc6Nay-EONc3Vae2Pi9guDuLQ'
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
  getArtistas(termino: string) {

    //envia un query personalizado y le devuelve el oobserbable
    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data => {
      return data['artists'].items;
    }));
    

  }

  getArtista(id: string) {

    //envia un query personalizado y le devuelve el oobserbable
    return this.getQuery(`artists/${id}`);
 /*    .pipe(map(data => {
      return data['artists'].items;
    })); */
    

  }
  getTopTracks(id: string) {

    //envia un query personalizado y le devuelve el oobserbable
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map(data => data['tracks']
    ));
    

  }
}
