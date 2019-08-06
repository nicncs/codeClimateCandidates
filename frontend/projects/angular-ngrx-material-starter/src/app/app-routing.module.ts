import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'service',
    pathMatch: 'full'
  },
  {
    path: 'order-management',
    loadChildren: () =>
      import('./features/order-management/order.module').then(
        m => m.OrderModule
      )
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./features/service/feature-list.module').then(
        m => m.FeatureListModule
      )
  },
  {
    path: '**',
    redirectTo: 'service'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
