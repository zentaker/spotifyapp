# EMpresa para vener playlist y experiencias musicales para restaurantes y centros de atencion 
La musica inspira buscar generar una experiencia sensorial a la audiencia 

- crear playlist con el api de spotify
- reproducir en los establecimientos




![spotyapp2](https://user-images.githubusercontent.com/46875264/114787552-a31fb300-9d45-11eb-8eaa-e4f7f98f9e18.png)
![spotyapp](https://user-images.githubusercontent.com/46875264/114787612-b599ec80-9d45-11eb-8e2e-6436e8636ab7.png)




- angular routes
- pedidos de http con agular

El servicio que genera hacer una peticion a una api 

```
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

  ```

- Pipes para filtrar ciertos resultados obtenidos 
la imagen de los artistas lo validemos antes de mostrarla 

- loading que le diga a los usuarios que espere mientras la data viene del servidor
solamente aparesca cuando estamos cargando informacion
se va a controlar con un ngIf'


# como hacer un query con una busqueda personalizada?

- pagina del artista 


La logica de funcionamiento:
1. mediante routes se pasa el id del artista (app.routes.ts)
2. mediante un activatedroutes se obtiene el id de la ruta (artista.component.ts)
3. se envia al servicio el id obtenido (artista.component.ts)
4. el servicio realiza el query con el id obtenido (spotify.service.ts)
