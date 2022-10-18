import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/';
import { ResqBooks } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  url: string ='https://api.itbook.store/1.0/new';

  constructor(private http: HttpClient) { 
  }

    getLibros() {
      return this.http.get<ResqBooks>(this.url);
    }

  codeerror( code: string){

    switch(code){
      case 'auth/email-already-in-use':
        return Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'El Usuario ya existe',
        });
        case 'auth/wrong-password':
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña es incorrecta',
        })
        case 'auth/user-not-found':
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El Usuario no existe',
          });
        case 'auth/weak-password':
          return  Swal.fire({
          icon: 'warning',
          title: 'La contraseña es muy debil',
          text: 'Ingrese una nueva',
        });
          case 'auth/invalid-email':
            return Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: ' El correo es invalido',
            });
        default:
        return Swal.fire({
          icon: 'question',
          title: 'Oops...',
          text: 'Error Desconocido  ',
        });
    }

  }
}
