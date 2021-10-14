import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'panel', component: PanelComponent },
      { path: '**', pathMatch: 'full', redirectTo: '/login' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

