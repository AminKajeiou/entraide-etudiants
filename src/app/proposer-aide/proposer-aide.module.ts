import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposerAidePageRoutingModule } from './proposer-aide-routing.module';

import { ProposerAidePage } from './proposer-aide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposerAidePageRoutingModule
  ],
  declarations: [ProposerAidePage]
})
export class ProposerAidePageModule {}
