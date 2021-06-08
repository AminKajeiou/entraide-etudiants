import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposerAidePostsPage } from './proposer-aide-posts.page';

const routes: Routes = [
  {
    path: '',
    component: ProposerAidePostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposerAidePostsPageRoutingModule {}
