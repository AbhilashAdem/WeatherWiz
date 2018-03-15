import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @ViewChild('SerachInput') searchInput: ElementRef;
  elementArr : string[] = [];
  getUrl: string = '';
  lati : number ='';
  longi: number ='';

  constructor(private mapsLoaderApi: MapsAPILoader , private ngZone: NgZone , private httpClient : HttpClient  ) { }

  ngOnInit() {
    this.mapsLoaderApi.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement,{types:['(cities)']});

        autocomplete.addListener('place_Changed' ,() =>
        {
          this.ngZone.run(() =>{
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            if (place.geometry === undefined || place.geometry === null){
              return;
            }
          });
        });
      }
    );
  }

  OnClickee(element: ElementRef){
    console.log(element.nativeElement.value);
    console.log(element);
    this.elementArr = element.nativeElement.value.split(',', 3);
    console.log(this.elementArr);
    this.getUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.elementArr[0]+',+'+this.elementArr[1]'+,+'+this.elementArr[2]+'+&key=AIzaSyA4zRqg8YVJcQSmmTHQ-xkxnylS_zIm-Q4';
    console.log(this.getUrl);
     this.httpClient.get(this.getUrl).subscribe(
      (data: JSON) => {
        console.log(data);
        console.log(data.results[0].geometry.location);
       this.lati = data.results[0].geometry.location.lat;
         console.log('lati'+ this.lati);
        this.longi = data.results[0].geometry.location.lng;
        console.log('longi'+ this.longi);
      }
    );



  }


}
