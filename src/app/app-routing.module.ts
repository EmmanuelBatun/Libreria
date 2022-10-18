import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VereficarCorreoComponent } from './components/vereficar-correo/vereficar-correo.component';
import { CanActivate, RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router'; 
import { Observable } from 'rxjs';



const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'recuperar-password', component: RecuperarPasswordComponent},
  {path: 'vereficar-correo', component: VereficarCorreoComponent},
  {path: '**', redirectTo:'login', pathMatch: 'full'},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
