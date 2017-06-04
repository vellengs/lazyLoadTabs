import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPageComponent } from './list-page';

@NgModule({
  declarations: [
    ListPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(ListPageComponent),
  ],
  exports: [
    ListPageComponent
  ]
})
export class ListPageComponentModule {}
