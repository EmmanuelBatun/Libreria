import { Component, OnInit } from '@angular/core';
import { ErrorsService } from './services/errors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Libreria';

  libroslist: any =[];
  constructor(){
  }

  ngOnInit(): void {

  }





}
