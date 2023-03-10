import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildBotComponent } from './build-bot.component';
import { InitializationsComponent } from './pages/Initializations/initializations.component';
import { DateRangeComponent } from './pages/datepicker/datepicker.component';

const routes: Routes = [
  {
    path: '',
    component: BuildBotComponent,
    data: { breadcrumb: 'build-bot' },
    children: [
      // { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'initializations',
        component: InitializationsComponent,
        data: { breadcrumb: 'initializations' },
      },
      {
        path: 'daterange',
        component: DateRangeComponent,
        data: { breadcrumb: 'daterange' },
      },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildBotRoutingModule {}
