import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { ResqBooks,  } from 'src/app/models/books';
import { ErrorsService } from 'src/app/services/errors.service'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public libro : any= [];

  constructor( private afAuth: AngularFireAuth, private router: Router,private errorsService: ErrorsService) {

 }
 

  ngOnInit(): void {
    this.errorsService.getLibros()
    .subscribe( (resp: ResqBooks) =>{ 
     console.log(resp.books)
      this.libro = resp.books;
    });
  }
cerrarsesion() {
  this.afAuth.signOut().then(()=> this.router.navigate(['/login']));
 }
}
