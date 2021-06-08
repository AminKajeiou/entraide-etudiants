import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposerAidePage } from './proposer-aide.page';

const routes: Routes = [
  {
    path: '',
    component: ProposerAidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposerAidePageRoutingModule {}
