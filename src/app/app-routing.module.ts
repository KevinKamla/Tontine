import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'firstpage',
    loadChildren: () => import('./views/firstpage/firstpage.module').then( m => m.FirstpagePageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./views/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'investment',
    loadChildren: () => import('./views/investment/investment.module').then( m => m.InvestmentPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./views/auth/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./views/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./views/transaction/transaction.module').then( m => m.TransactionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
