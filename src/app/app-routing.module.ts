import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'demander-aide',
    loadChildren: () => import('./demander-aide/demander-aide.module').then(m => m.DemanderAidePageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumPageModule)
  },
  {
    path: 'reponse',
    loadChildren: () => import('./reponse/reponse.module').then(m => m.ReponsePageModule)
  },
  {
    path: 'user-posts',
    loadChildren: () => import('./user-posts/user-posts.module').then(m => m.UserPostsPageModule)
  },
  {
    path: 'messagerie',
    loadChildren: () => import('./messagerie/messagerie.module').then(m => m.MessageriePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },  {
    path: 'all-posts',
    loadChildren: () => import('./all-posts/all-posts.module').then( m => m.AllPostsPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
