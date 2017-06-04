import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ListPageComponent } from "../../components/list-page/list-page";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage extends ListPageComponent {

}
