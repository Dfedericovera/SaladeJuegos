import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';

import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { PaisesService } from './servicios/paises.service'; 

import { JugadoresService } from './servicios/jugadores.service'; 
import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ListadoComponent } from './componentes/listado/listado.component';

import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { PptComponent } from './componentes/ppt/ppt.component';
import { HttpClientModule } from  '@angular/common/http';

import { WsService }  from './servicios/ws-service.service';
import { AutService } from './servicios/auth.service';
import { VerificarJWTService } from './servicios/verificar-jwtservice.service';
import { JwtModule } from './jwt/jwt.module';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatTooltipModule} from '@angular/material'
import {ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { SnakeComponent } from './componentes/snake/snake.component';

import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';


import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings,RecaptchaLoaderService, RecaptchaComponent } from 'ng-recaptcha';
const globalSettings: RecaptchaSettings = {siteKey:'6LedkbkUAAAAANj1mPFBIJr53_pOgUcbjbshQ5Sv'}





@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    PptComponent,
    TatetiComponent,
    SnakeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpModule,
    HttpClientModule,
    JwtModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    JwBootstrapSwitchNg2Module,
    RecaptchaModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    })
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ 
    JuegoServiceService,
    WsService, 
    MiHttpService,
    PaisesService,
    ArchivosJugadoresService,
    JugadoresService,
    AutService,
    VerificarJWTService,
    RecaptchaComponent,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    }
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
