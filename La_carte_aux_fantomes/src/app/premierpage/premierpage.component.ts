import { Component, OnInit } from '@angular/core';


 



@Component({
  selector: 'app-premierpage',
  templateUrl: './premierpage.component.html',
  styleUrls: ['./premierpage.component.css']
})
export class PremierpageComponent implements OnInit {

  
  constructor() { 
    

  }

  ngOnInit(): void {
      this.initMap()
  }

  initMap(){
    
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        
        mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaGFlbDMxODYiLCJhIjoiY2t6ZTVub3Q0Mmc1cjJ2bnhnYWNqb2sxbSJ9.1_BvoAslFg2Qp7aOaB8g9w';
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [1.7,47.581,-0.857],
          zoom: 4.25,
    });
  }

}
