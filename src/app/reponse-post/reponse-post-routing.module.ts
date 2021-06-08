import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReponsePostPage } from './reponse-post.page';

const routes: Routes = [
  {
    path: '',
    component: ReponsePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReponsePostPageRoutingModule {}
