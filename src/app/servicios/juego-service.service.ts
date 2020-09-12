import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from './mi-http/mi-http.service';
import { AutService } from "../servicios/auth.service";


@Injectable()
export class JuegoServiceService {

  /* api = "http://localhost/Apache/PHP/TPSALADEJUEGOS"; */
  /* api =  "https://dfedericovera.000webhostapp.com"  ; */
  /* api =  "http://saladejuegosv.atwebpages.com"  ; */
 /*  api =  "https://apisala.000webhostapp.com"  ; */
  api = "https://saladejuegosv.000webhostapp.com/";
  peticion: any;

  constructor(public miHttp: MiHttpService,private autService:AutService) {
    //this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }
  filtrado: any;

  public registrarJuego(ruta:string ,nombreJuego:string,gano:boolean) {
    
    var date = new Date();
    var alias = this.autService.getToken();
    var fecha = date.getDate().toString()+'/'+(date.getMonth()+1).toString()+'/'+date.getFullYear();
    var hora = date.getHours().toString();
    var minutos = date.getMinutes();
    if(minutos < 10){
      hora += ':'+'0'+ minutos.toString();
    }
    else{
      hora +=':'+minutos.toString();
    }
    var juego = new JuegoJugador(nombreJuego,alias["alias"],fecha,hora,gano);
    /* console.log(juego); */
    return this.guardarJuego(ruta,juego);
    //pasar un objeto {"nombreJuego":"tateti","alias":"admin","fecha":"2019-06-11","hora":"17:00","gano":true}  
  }

  traertodos(ruta: string, filtro?: string) {
    return this.miHttp.httpGetP(this.api + ruta).then(data => {
      /* console.info("jugadores service", data); */

      this.filtrado = data;

      if (filtro == "ganadores") {        
        this.filtrado = this.filtrado.filter(
          data => data.gano == true);
          /* console.info("jugadores service ganadores", data); */
        return this.filtrado
      }
      else if (filtro == "perdedores") {
        this.filtrado = this.filtrado.filter(          
          data => data.gano == false);
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
        /* console.info("jugadores service todos", data[0].gano); */
      return this.filtrado
    }    
    )
      .catch(errror => {
        console.log("error")
        return this.filtrado;
      });
  }

  private guardarJuego(ruta:string,objeto:any){

    return this.miHttp.httpPostP(this.api + ruta,objeto)
    .toPromise()
    .then(data => {
      //console.log("Usuario");
      /* console.log( data ); */
      return data;
    }, err => {
      console.log(err);
    });

  }

  public listar(): Array<Juego> {
    this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });


    this.peticion
      .subscribe(data => {
        console.log("En listar");
        console.log(data);
      }, err => {
        console.info("error: ", err);
      })

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
      .subscribe(data => {
        console.log("En listarPromesa");
        console.log(data);
      }, err => {
        console.log(err);
      })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false, "promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

}
class JuegoJugador {

  public nombreJuego;
  public alias;
  public fecha;
  public hora;
  public gano;

  constructor(nombreJuego,alias,fecha,hora,gano){
    this.nombreJuego = nombreJuego;
    this.alias = alias;
    this.fecha = fecha;
    this.hora = hora;
    this.gano = gano;

  }

}
