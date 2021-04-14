import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  // creamos una nueva propiedad
  loading: boolean;

 

  constructor(private spotify: SpotifyService) {
    //inicializar el loading primero
    this.loading = true;

    
    this.spotify.getNewReleases()
         .subscribe(( data:any) => {
          
           this.nuevasCanciones = data;
           //cuando ya tenemos la data 
           this.loading = false;
      
    })
    


   }

  ngOnInit(): void {
  }

}
