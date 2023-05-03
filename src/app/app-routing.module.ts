import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { FindComponent } from './find/find.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostComponent } from './post/post.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [{path:'',component: HomeComponent,canActivate:[AuthGuard]},
                        {path:'contact',component:ContactComponent,canActivate:[AuthGuard]},
                        {path:'post',component:PostComponent,canActivate:[AuthGuard]},
                        {path:'find',component:FindComponent,canActivate:[AuthGuard]},
                        {path:'signin',component:SignInComponent},
                        {path:'signup',component:SignUpComponent},
                        {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
