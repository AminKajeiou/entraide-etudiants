import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReponsePostPageRoutingModule } from './reponse-post-routing.module';

import { ReponsePostPage } from './reponse-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReponsePostPageRoutingModule
  ],
  declarations: [ReponsePostPage]
})
export class ReponsePostPageModule {}
