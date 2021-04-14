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