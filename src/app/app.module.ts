import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: 'home-page', component: HomeComponent},
      {
        path: 'users-page', component: UsersComponent,
        children: [
          {path: 'user-details/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts-page', component: PostsComponent,
        children: [
          {path: 'post-details/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments-page', component: CommentsComponent,
        children: [
          {path: 'comment-details/:id', component: CommentDetailsComponent}
        ]
      },
      {
        path: '**', component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
