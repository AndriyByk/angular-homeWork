import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./app-components/home/home.component";

@NgModule({
  imports:[
    RouterModule.forRoot([
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: 'home-page', component: HomeComponent},
      {path: 'users-page', loadChildren:() => import('./users/users.module').then(value => value.UsersModule)},
      {path: 'posts-page', loadChildren:() => import('./posts/posts.module').then(value => value.PostsModule)},
      {path: 'comments-page', loadChildren:() => import('./comments/comments.module').then(value => value.CommentsModule)},
      {path: '**', component: HomeComponent}
    ])
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
