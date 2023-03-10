import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'overview',
    component: LayoutComponent,
    loadChildren: () =>
      import('../overview/overview.module').then(m => m.OverviewModule),
  },
  {
    path: 'build-bot',
    component: LayoutComponent,
    loadChildren: () =>
      import('../build-bot/build-bot.module').then(m => m.BuildBotModule),
  },
  { path: '', redirectTo: 'build-bot', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class LayoutRoutingModule {}
