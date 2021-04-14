import { Component, OnInit } from '@angular/core';
//para saber cual es la ruta activa 
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  loadingArtist: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {
    
    this.loadingArtist = true;
    
    //para subcribirme a todos los cambios que vengan por el url
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    } )
  }
  getArtista(id: string) {
    this.loadingArtist = true;

    this.spotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista);

        // se almacena lo que se recive del servicio
        this.artista = artista;
        this.loadingArtist = false;
    })
    
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }


}
