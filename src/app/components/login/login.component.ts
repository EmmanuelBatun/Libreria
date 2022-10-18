import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import {AngularFireAuth} from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { ErrorsService } from '../../services/errors.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario : FormGroup;
  loading : boolean = false;

  constructor(
    private fb: FormBuilder,
     private afAuth: AngularFireAuth,
     private router: Router,
     private firebaseerror:ErrorsService

  ) { 

    this.loginUsuario = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
  })
  }
   
  ngOnInit(): void {}
login(){
  const email = this.loginUsuario.value.email;
  const password = this.loginUsuario.value.password;
  this.loading = true;

  this.afAuth.signInWithEmailAndPassword(email,password).then((user) =>{
    console.log(user);
    this.router.navigate(['./dashboard'])
  }).catch((error) =>{
    this.loading = false;
 (this.firebaseerror.codeerror(error.code));
  })
}

}
