import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { DbService } from './services/db.service';


const routes: Routes = [
  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { path: 'login',
    redirectTo: 'login', 
    pathMatch: 'full' 
  },

  { path: 'login', 
    component: LoginPage 
  },

  { path: 'reset-password', 
    component: ResetPasswordPage 
  },

  { path: 'home',
    component: HomePage,
    canActivate: [DbService]
  },

  { 
   path: '**', 
   redirectTo: 'e404',
   pathMatch: 'full'
  },

  {
    path: 'e404',
    loadChildren: () => import('./page/e404/e404.module').then( m => m.E404PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

