import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  //se inicializa la variable
  loading: boolean;

  constructor(private spotify: SpotifyService) { }
  buscar(termino: string) {
    console.log(termino);
    //cuando se comienza a buscar
    this.loading = true;

    this.spotify.getArtista(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        //cuando ya se trae los resultados
        this.loading = false;
      });
  }

}
