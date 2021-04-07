import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemanderAidePage } from './demander-aide.page';

const routes: Routes = [
  {
    path: '',
    component: DemanderAidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemanderAidePageRoutingModule {}
