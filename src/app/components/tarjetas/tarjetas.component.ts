import { Component, Input } from '@angular/core';

//importar el router para redirecionar al momento de dar click en la tarjeta
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  @Input() items: any[] = [];

  //de esta manera ya tengo el contro del router para realizar las redireciones
  constructor( private router: Router ) { }

  verArtista(item: any) {
    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id
    };

    //navegar a una ruta en particular tiene un parametro
    this.router.navigate(['/artist', artistaId]); 

   
  }



}
