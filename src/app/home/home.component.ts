import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/map_style.txt')
        .subscribe((data: any) => {
          this.options = {
            mapTypeId: 'roadmap',
            disableDefaultUI: true,
            styles: data
          }
        });

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

}
