import { Component, OnInit, Input } from '@angular/core';
import { LocationCoordinates } from './CustomModels/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  position : LocationCoordinates;

  ngOnInit(){
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos);
          this.position = new LocationCoordinates('Current Whether Conditions in Your City', pos.coords.latitude , pos.coords.longitude);
        },
        (err) =>{
          console.log(err);
        }       
      );
    }

 

    
  }

}
