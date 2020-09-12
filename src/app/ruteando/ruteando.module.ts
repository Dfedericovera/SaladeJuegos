import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from '../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { PptComponent } from '../componentes/ppt/ppt.component';
import { VerificarJWTService } from '../servicios/verificar-jwtservice.service';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { SnakeComponent } from '../componentes/snake/snake.component';

// declaro donde quiero que se dirija
const MiRuteo = [
  { path: 'Jugadores', canActivate: [VerificarJWTService], component: JugadoresListadoComponent },
  { path: '', canActivate: [VerificarJWTService], component: PrincipalComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Mapa', canActivate: [VerificarJWTService], component: MapaDeGoogleComponent },
  { path: 'QuienSoy', canActivate: [VerificarJWTService], component: QuienSoyComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Principal', canActivate: [VerificarJWTService], component: PrincipalComponent },
  { path: 'Listado', canActivate: [VerificarJWTService], component: ListadoComponent },
  { path: 'Paises', canActivate: [VerificarJWTService], component: ListadoDePaisesComponent },

  {
    path: 'Juegos', canActivate: [VerificarJWTService],
    component: JuegosComponent,
    children:
      [{ path: '', component: MenuCardComponent },
      { path: 'ppt', component: PptComponent },
      { path: 'Adivina', component: AdivinaElNumeroComponent },
      { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
      { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent },
      { path: 'Anagrama', component: AnagramaComponent },
      { path: 'Tateti', component: TatetiComponent },
      { path: 'Snake', component: SnakeComponent }]
  },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
