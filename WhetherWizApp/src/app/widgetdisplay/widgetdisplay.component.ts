import {Component, OnInit, } from '@angular/core';
import {DomSanitizer , SafeResourceUrl} from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core';


@Component({
  selector: 'app-widgetdisplay',
  templateUrl: './widgetdisplay.component.html',
  styleUrls: ['./widgetdisplay.component.css']
})
@Pipe({
  name : 'pipe'
})
export class WidgetdisplayComponent implements OnInit {

  src: SafeResourceUrl;

  constructor(private dss: DomSanitizer) {
    this.html = this.dss.bypassSecurityTrustHtml('<iframe \n' +
      'type="text/html" frameborder="0" \n' +
      'height="390px" \n' +
      'width="100%" \n' +
      'scrolling="no"'+
      'src="https://darksky.net/widget/graph-bar/42.360082,-71.05888/us12/en.js?width=undefined&title=Full Forecast&textColor=333333&bgColor=FFFFFF&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=C7C7C7&currentDetailsOption=true"></iframe>');
  }


  ngOnInit() {

  }
}
