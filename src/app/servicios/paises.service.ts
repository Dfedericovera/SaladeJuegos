import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
@Injectable()
export class PaisesService {

  constructor(public miHttp: MiHttpService) { }

  url = "https://www.google.com/recaptcha/api/siteverify";


  verificarCaptcha(secretResponse){
    console.log("ENVIANDO");
    return this.miHttp.httpPostP("http://localhost/Apache/PHP/TPSALADEJUEGOS/recapcha/", secretResponse);
  }

  public listar(): Promise<Array<any>> {

    //return null;
    return   this.miHttp.httpGetP("http://localhost/Apache/PHP/TPSALADEJUEGOS/usuario/listar")
       .then( data => {
         console.log( data );
         return data;
       })
       .catch( err => {
         console.log( err );
         return null;
       });
       //return null;
  }











}
