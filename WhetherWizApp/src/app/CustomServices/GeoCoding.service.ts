import { ElementRef,
         Injectable,
         NgZone,
         EventEmitter } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {MapsAPILoader} from '@agm/core';

import { LocationCoordinates } from "../CustomModels/location.model";



@Injectable()
export class GeoCoadingService{

    LocationEmmiter = new EventEmitter<LocationCoordinates>();

    AddressArr : string[] =[];
    locationcoordinates : LocationCoordinates;
    UrlForGetRequeest : string='';
    GoogleApiKey: string = 'AIzaSyA4zRqg8YVJcQSmmTHQ-xkxnylS_zIm-Q4';

    constructor(private httpClient: HttpClient,
                 private mapsLoaderApi: MapsAPILoader ,
                 private ngZone: NgZone ){
    }

    getLatitudeAndLongitude(element : ElementRef){
        this.AddressArr =  element.nativeElement.value.split(',', 3);
        this.UrlForGetRequeest = 'https://maps.googleapis.com/maps/api/geocode/json?address='
                                     + this.AddressArr[0] + ',+' + this.AddressArr[1] +'+,+' + this.AddressArr[2] + '+&key='+this.GoogleApiKey;
        this.httpClient.get(this.UrlForGetRequeest).subscribe(
            (response: any) => {
                console.log(response.results);
               this.locationcoordinates = new LocationCoordinates(this.AddressArr[0],
                                                                    response.results[0].geometry.location.lat ,
                                                                    response.results[0].geometry.location.lng);
               console.log(this.locationcoordinates);
               this.LocationEmmiter.emit(this.locationcoordinates);
            }
        );
    }

    doAutoComplete(searchInput : ElementRef){
        this.mapsLoaderApi.load().then(
            () => {
              let autocomplete = new google.maps.places.Autocomplete(searchInput.nativeElement,{types:['(cities)']});
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

}