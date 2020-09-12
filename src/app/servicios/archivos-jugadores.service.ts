import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable()
export class ArchivosJugadoresService {

  /* api = "http://localhost/Apache/PHP/TPSALADEJUEGOS"; */
  /* api =  "https://dfedericovera.000webhostapp.com"  ; */
  /* api =  "http://saladejuegosv.atwebpages.com"  ; */
  /* api =  "https://apisala.000webhostapp.com"  ; */
  api = "https://saladejuegosv.000webhostapp.com/";
  peticion: any;
  constructor(public miHttp: MiHttpService) {

  }


  public traerJugadores(ruta) {
    /* console.log(this.api); */
    return this.miHttp.httpGetO(this.api + ruta)
      .toPromise()
      .then(data => {
        /* console.log("Archivo jugadores"); */
        // console.log( data );
        return data;
      }, err => {
        console.log(err);
      })

  }

  public registrar(ruta: string, objeto:any){

    return this.miHttp.httpPostP(this.api + ruta , objeto)
    .toPromise()
    .then(data => {
      //console.log("Usuario");
      console.log( data );
      if (data["Token"]) {
        localStorage.setItem('token',data["Token"]);
      }
      return data;
    }, err => {
      console.log(err);
    });

  }


  public login(ruta: string, objeto: any) {
    return this.miHttp.httpPostP(this.api + ruta, objeto)
    .toPromise()
    .then(data => {
      //console.log("Usuario");
      console.log( data );
      if (data["Token"]) {
        localStorage.setItem('token',data["Token"]);
      }
      return data;
    }, err => {
      console.log(err);
    })
    /* data => {
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl("/pagina1");
      }
    }; */
    /* .toPromise()
      .then(data => {
        //console.log("Usuario");
        console.log( data );
        return data;
      }, err => {
        console.log(err);
      }) */
    /* .then(data => {
      console.log("login");
      // console.log( data );
      return data;
    }).catch(err => {
      console.log(err);
      return null;
    }); */
  }



}
