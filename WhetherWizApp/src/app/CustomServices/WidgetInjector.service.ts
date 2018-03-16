import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { LocationCoordinates } from "../CustomModels/location.model";

@Injectable()
export class WidgetInjectorService{

    LocationName : String ='<h1 style="background-color: #FFFFFF ; text-align: center; font-family: monospace; border-radius: 10px "> ';
    iFrameAndStyling : string = '<iframe type="text/html" frameborder="0" height="390px" width="100%" scrolling="no" src=' ;
    WidgetSrc : string = '"https://darksky.net/widget/graph-bar/' ;
    WidgetStyling : string = '/us12/en.js?width=undefined&title=Full Forecast&textColor=333333&bgColor=FFFFFF&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=C7C7C7&currentDetailsOption=true"></iframe>';


    constructor(private sanitizer: DomSanitizer){
    }

    DoDisplayWidget(location : LocationCoordinates){
        location.city
        return this.sanitizer.bypassSecurityTrustHtml(this.LocationName + location.city + '</h1>'+
                                                      this.iFrameAndStyling+
                                                      this.WidgetSrc+location.latitude+','+ location.longitude+
                                                      this.WidgetStyling);

    }

}