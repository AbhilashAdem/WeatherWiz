import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {HttpClient} from '@angular/common/http';
import { GeoCoadingService } from '../CustomServices/GeoCoding.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @ViewChild('SerachInput') searchInput: ElementRef;
 
  constructor(private  gooCoadingService : GeoCoadingService ) {
   }

  ngOnInit() {
    this.gooCoadingService.doAutoComplete(this.searchInput);
  }

  getCoOrdinates(element: ElementRef){
    this.gooCoadingService.getLatitudeAndLongitude(element);
  }


}
