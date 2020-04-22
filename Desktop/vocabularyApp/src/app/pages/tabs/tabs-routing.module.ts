import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'practice',
        children: [
          {
            path: '',
            loadChildren: () => import('../practice/practice.module').then( m => m.PracticePageModule)
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
          }
        ]
      },
      {
        path: 'dictionary',
        children: [
          {
            path: '',
            loadChildren: () => import('../dictionary/dictionary.module').then( m => m.DictionaryPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}