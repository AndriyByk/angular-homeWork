import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentDetailsComponent} from "./comments-components/comment-details/comment-details.component";
import {CommentResolver} from "./comments-services/comments-resolvers/comment.resolver";
import {CommentsResolver} from "./comments-services/comments-resolvers/comments.resolver";
import {CommentActivatorGuard} from "./comments-services/comments-guards/comment-activator.guard";
import {CommentsActivatorGuard} from "./comments-services/comments-guards/comments-activator.guard";

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canActivate: [CommentsActivatorGuard],
    canDeactivate: [CommentsActivatorGuard],
    children: [
      {
        path: 'comment-details/:id', component: CommentDetailsComponent,
        resolve: {commentData: CommentResolver},
        canActivate: [CommentActivatorGuard],
        canDeactivate: [CommentActivatorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
