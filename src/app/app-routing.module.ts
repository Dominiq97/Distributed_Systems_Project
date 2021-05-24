import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityGetComponent } from './activity-get/activity-get.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard.ts.guard";


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate:[SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent, canActivate:[SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate:[SecureInnerPagesGuard] },
  {
    path: 'activity/create',
    component: ActivityAddComponent, canActivate:[AuthGuard]
  },
  {
    path: 'edit/:id',
    component: ActivityEditComponent, canActivate:[AuthGuard]
  },
  {
    path: 'activities',
    component: ActivityGetComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
