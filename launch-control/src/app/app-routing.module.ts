import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlComponent } from './control/control.component';

const routes: Routes = [{
  path: 'control',
  component: ControlComponent,
  data: { title: 'Control' }
},
{
  path: '',
  redirectTo: '/control',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
