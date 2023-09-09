import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: NavComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'settings',
            loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
