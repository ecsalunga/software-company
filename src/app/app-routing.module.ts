import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesterComponent } from '../app/tester/tester.component';
import { AboutComponent } from '../app/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'tester', component: TesterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
