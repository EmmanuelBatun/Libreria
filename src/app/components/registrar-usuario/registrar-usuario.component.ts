import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import {AngularFireAuth} from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { ErrorsService } from '../../services/errors.service';
import Swal from 'sweetalert2';

 
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  registrarUsuario: FormGroup;
  loading: boolean = false;
  constructor( 
    private fb: FormBuilder,
     private afAuth: AngularFireAuth,
     private router: Router,
     private firebaseerror:ErrorsService
     ) { 
  
    this.registrarUsuario = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      repetirpassword:['', Validators.required],

      
    })

  }

  ngOnInit(): void {
  }

  registrar(){ 
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirpassword = this.registrarUsuario.value.repetirpassword;
    if  ( password != repetirpassword){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'las contraseñas no son iguales'});
      return;
    }

    this.loading = true;
    

  this.afAuth.createUserWithEmailAndPassword(email,password)
  .then((user)=> {
    this.loading = true;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El usuario fue registrado',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/login'])
    console.log(user);
  } ).catch((error)=>{
    this.loading = false;
(this.firebaseerror.codeerror(error.code));
  })
    
  }




  }

