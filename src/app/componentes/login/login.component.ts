import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Jugador } from "../../clases/jugador";

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

import { PaisesService } from "../../servicios/paises.service";
import { JugadoresService } from "../../servicios/jugadores.service";
import { WsService } from '../../servicios/ws-service.service';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MiHttpService } from "../../servicios/mi-http/mi-http.service";
import { RecaptchaComponent } from "ng-recaptcha";
import { trigger, style ,transition, animate, state } from "@angular/animations";


var RecapchaSuccess: any = false;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('enterState',[
      state('void', style({
        transform: 'translateX(-400px)',
        opacity:0
      })),
      transition(':enter',[
        animate(300, style({
          transform:'translateX(0px)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  private elementRef: ElementRef;

  progreso: number;
  progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;
  jugador: Jugador;
  clase = "progress-bar progress-bar-info progress-bar-striped ";

  signin = new FormGroup({
    correo: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.email
    ]),
    clave: new FormControl("", Validators.required),

  });
  recaptchaStr: any = "";
  get correo(): any { return this.signin.get('correo'); }
  get clave(): any { return this.signin.get('clave'); }
  setValue(correo, clave) {
    this.signin.setValue({ correo: correo, clave: clave });
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarios: PaisesService,
    private jugadoresService: JugadoresService,
    private ws: WsService,
    private mihttp: MiHttpService,
  ) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";
    this.jugador = new Jugador("", "", "");
  }



  //Agrego la funcion entrar a una varible global
  ngOnInit() {
    /* window["callback"] = this.Entrar; */
    RecaptchaComponent.prototype.ngOnDestroy = function () {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }

  //Guardo el resultado del capcha en una varible global
  Entrar(response) {
    return new Promise(function (resolve, reject) {
      var data = {
        response: response
      }
      this.mihttp.httpPostP("https://saladejuegosv.000webhostapp.com/recapcha/", data)
        .toPromise()
        .then(data => {
          //console.log("Usuario");
          console.log(data);
          return data;
        }, err => {
          console.log(err);
        });
      //Your code logic goes here

      //Instead of using 'return false', use reject()
      //Instead of using 'return' / 'return true', use resolve()
      resolve();

    }); //end promise

    var data = {
      response: response
    }
    this, this.mihttp.httpPostP("https://saladejuegosv.000webhostapp.com/recapcha/", data)
      .toPromise()
      .then(data => {
        //console.log("Usuario");
        console.log(data);
        return data;
      }, err => {
        console.log(err);
      });
    /* 
       var json = JSON.stringify(data);
       var xhttp = new XMLHttpRequest();
   
       xhttp.onreadystatechange = function () {
         if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
           var success = JSON.parse(xhttp.response);
           console.log(success);
           if (success["success"] == true) {
             RecapchaSuccess = true;
           }
         }
       };
       xhttp.open("POST", "https://dfedericovera.000webhostapp.com/recapcha/", false);
       xhttp.send(json); *//* http://localhost/Apache/PHP/TPSALADEJUEGOS/recapcha/ */

  }
  // Confirma el capcha y procede con el login
  onSubmit(recapchaResponse) {

    console.log(recapchaResponse);/* ['success'] */

    this.jugador.correo = this.signin.get("correo").value;
    this.jugador.clave = this.signin.get("clave").value;
    this.jugadoresService.login("/usuario/login", this.jugador)
      .then(data => {

        /* this.router.navigate(['']); */
 
        if (data != null && recapchaResponse['success'] == true) {
          this.router.navigate(['']);
        }
        
      }, err => {
        console.log(err);
      });
    /* setTimeout(() => {
      
      if (RecapchaSuccess == true) {
        this.jugador.correo = this.signin.get("correo").value;
        this.jugador.clave = this.signin.get("clave").value;
        this.jugadoresService.login("/usuario/login", this.jugador)
          .then(data => {
            if (data != null) {
              this.router.navigate(['']);
            }
          }, err => {
            console.log(err);
          })
      }

    }, 1000); */
  }

  onLoginClick(captchaRef: any): void {
    if (this.recaptchaStr) {
      captchaRef.reset();
    }
    captchaRef.execute();
  }

  public resolved(captchaResponse: string): void {
    this.recaptchaStr = captchaResponse;
    /* console.log(this.recaptchaStr); */
    if (this.recaptchaStr) {
      var data = {
        response: this.recaptchaStr
      }
      this.mihttp.httpPostP("https://saladejuegosv.000webhostapp.com/recapcha/", data)
        .toPromise()
        .then(response => {
          //console.log("Usuario");
          /* console.log(response); */
          this.onSubmit(response);
          return response;
        }, err => {
          console.log(err);
        });

    }
  }

 /*  MoverBarraDeProgreso() {
    console.info(this.usuarios.listar());
    console.info(this.jugador.correo);
    console.info(this.jugador.clave);
    console.info(this.jugador.alias);
    this.logeando = false;
    this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje = "NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso = this.progreso + 1;
      this.ProgresoDeAncho = this.progreso + 20 + "%";
      switch (this.progreso) {
        case 15:
          this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
          this.progresoMensaje = "Verificando ADN...";
          break;
        case 30:
          this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje = "Adjustando encriptación..";
          break;
        case 60:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando Info del dispositivo..";
          break;
        case 75:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
          break;
        case 85:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Instalando KeyLogger..";
          break;

        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          // this.Entrar(); 
          break;
      }
    });
    //this.logeando=true;
  } */

}
