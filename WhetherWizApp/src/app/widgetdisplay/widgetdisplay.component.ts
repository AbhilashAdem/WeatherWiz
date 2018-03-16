import {Component, OnInit, } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser';
import { LocationCoordinates } from '../CustomModels/location.model';
import { GeoCoadingService } from '../CustomServices/GeoCoding.service';
import { WidgetInjectorService } from '../CustomServices/WidgetInjector.service';



@Component({
  selector: 'app-widgetdisplay',
  templateUrl: './widgetdisplay.component.html',
  styleUrls: ['./widgetdisplay.component.css']
})

export class WidgetdisplayComponent implements OnInit {

  html : any;
  loc : LocationCoordinates;
  
  constructor(private geoCodingService : GeoCoadingService ,
              private widgetInjectorService : WidgetInjectorService) {
                
      this.geoCodingService.LocationEmmiter.subscribe(
        (data : LocationCoordinates ) => {
          console.log('from widgetdisplay - ' + data.city + ' ' + data.latitude + ' '+ data.longitude);
          this.loc = data;
          if(this.loc){
            this.html = this.widgetInjectorService.DoDisplayWidget(this.loc);
            console.log('onIIT');
          }
        }
      ); 
    }

  ngOnInit() {
  }

}
