import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposerAidePostsPageRoutingModule } from './proposer-aide-posts-routing.module';

import { ProposerAidePostsPage } from './proposer-aide-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposerAidePostsPageRoutingModule
  ],
  declarations: [ProposerAidePostsPage]
})
export class ProposerAidePostsPageModule {}
