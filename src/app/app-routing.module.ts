import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberGetComponent } from './member-get/member-get.component';
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
    path: 'member/create',
    component: MemberAddComponent, canActivate:[AuthGuard]
  },
  {
    path: 'edit/:id',
    component: MemberEditComponent, canActivate:[AuthGuard]
  },
  {
    path: 'members',
    component: MemberGetComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
