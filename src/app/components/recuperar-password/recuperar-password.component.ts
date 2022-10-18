import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorsService } from '../../services/errors.service';


@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css'],
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseerror:ErrorsService
  ) {
    this.recuperarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {}

  recuperar() {
    const email = this.recuperarUsuario.value.email;

    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        alert('Le enviamos un correo para restablecer su password')
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        alert(this.firebaseerror.codeerror(error.code));
      });
  }
}