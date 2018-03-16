import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { WidgetdisplayComponent } from './widgetdisplay/widgetdisplay.component';
import { FooterDisplayComponent } from './footer-display/footer-display.component';


import {ScriptInjectorDirective} from './CustomDirective/ScriptInjector.directive';

import { GeoCoadingService } from './CustomServices/GeoCoding.service';
import { WidgetInjectorService } from './CustomServices/WidgetInjector.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    WidgetdisplayComponent,
    FooterDisplayComponent,
   ScriptInjectorDirective
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4zRqg8YVJcQSmmTHQ-xkxnylS_zIm-Q4',
      libraries:['places']
    }),
    HttpClientModule
  ],
  providers: [GeoCoadingService, WidgetInjectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
