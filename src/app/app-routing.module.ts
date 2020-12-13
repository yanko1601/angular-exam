import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { CurrentRanklistComponent } from './current-ranklist/current-ranklist.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SetResultComponent } from './set-result/set-result.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'games',component: GamesComponent},
  {path: 'setresult', component: SetResultComponent},
  {path: 'currentranklist', component: CurrentRanklistComponent},
  {path: 'challenge/:id', component: ChallengeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
