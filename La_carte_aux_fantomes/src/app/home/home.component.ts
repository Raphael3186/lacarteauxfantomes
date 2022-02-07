import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  title = 'La carte aux fantômes';
  ngOnInit(): void {
  }
  OuvrirPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
}
