import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  { path: `callback/:type`, component: CallbackComponent },
  { path: 'p', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [authGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'p' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
