import { MaterialComponent } from './material/material.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { ChartComponent } from './chart/chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { FormDrivenComponent } from './form-driven/form-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {
    path: 'users/:id',
    component: DetailsComponent,
    children: [
      { path: 'address', component: UserAddressComponent}
    ]
  },
  { path: 'posts', component: PostsComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'form-driven', component: FormDrivenComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  { path: 'form-dynamic', component: FormDynamicComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, DetailsComponent,
  PostsComponent, ChartComponent, PageNotFoundComponent, UserAddressComponent,
  FormDrivenComponent, FormReactiveComponent, FormDynamicComponent,
  HeroesComponent, DashboardComponent, HeroDetailComponent, TodoComponent];
