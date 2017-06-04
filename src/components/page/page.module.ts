import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageComponent } from './page';

@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    IonicPageModule.forChild(PageComponent),
  ],
  exports: [
    PageComponent
  ]
})
export class PageComponentModule {}
