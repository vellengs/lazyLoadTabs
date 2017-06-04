import { Component } from '@angular/core';
import { NavController } from "ionic-angular";


@Component({
  selector: 'page',
  templateUrl: 'page.html'
})
export class PageComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    this.text = 'Hello World';
  }

}
