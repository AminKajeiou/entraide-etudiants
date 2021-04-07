import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemanderAidePageRoutingModule } from './demander-aide-routing.module';

import { DemanderAidePage } from './demander-aide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemanderAidePageRoutingModule
  ],
  declarations: [DemanderAidePage]
})
export class DemanderAidePageModule {}
