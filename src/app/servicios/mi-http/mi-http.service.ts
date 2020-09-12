import { log } from 'util';
import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { HttpHeaders, HttpClient, HttpClientModule } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { JsonPipe } from '@angular/common';


@Injectable()
export class MiHttpService {



  constructor(public http: Http, private httpClient: HttpClient) { }

  private headers: Headers = new Headers({});


  public httpGetP(url: string) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    /* console.log("ENVIANDO"); */
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
      
    });
    let options = {
      headers: headers
    }
    /* console.log(JSON.stringify(objeto)); */
    return this.httpClient
      .post(url,JSON.stringify(objeto),options)
      .catch(this.handleError);/* { "correo": "admin", "clave": "admin" },.subscribe(data => {
      console.log(data);
    });*/


    /* this.httpClient.post("http://localhost/Apache/PHP/TPSALADEJUEGOS/usuario/login/", { "correo": "admin", "clave": "admin" }, this.options)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error", error);

        } ); */

    /* return this.http.post(url,objeto,httpOptions) */
    /* return this.http
    .post( url, objeto, httpOptions)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError ); */
  }

  public httpGetO(url: string): Observable<Response> {
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    console.log(error);
    return error;
  }
}
