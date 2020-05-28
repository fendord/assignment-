import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front/front.module').then(m => m.FrontPageModule)
  },
  {
    path: 'modal-login',
    loadChildren: () => import('./modal-login/modal-login.module').then( m => m.ModalLoginPageModule)
  },
  {
    path: 'home/:userName',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'friends',
    loadChildren: () => import('./friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then( m => m.FrontPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'modal-map',
    loadChildren: () => import('./modal-map/modal-map.module').then( m => m.ModalMapPageModule)
  },
  {
    path: 'add-contact-modal',
    loadChildren: () => import('./add-contact-modal/add-contact-modal.module').then( m => m.AddContactModalPageModule)
  },
  {
    path: 'my-location',
    loadChildren: () => import('./my-location/my-location.module').then( m => m.MyLocationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
