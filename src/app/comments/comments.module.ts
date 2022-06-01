import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import {CommentService} from "./comments-services/comment.service";
import {HttpClientModule} from "@angular/common/http";
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';
import {CommentsResolver} from "./comments-services/comments-resolvers/comments.resolver";
import {CommentResolver} from "./comments-services/comments-resolvers/comment.resolver";
import {CommentsActivatorGuard} from "./comments-services/comments-guards/comments-activator.guard";
import {CommentActivatorGuard} from "./comments-services/comments-guards/comment-activator.guard";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    CommentsResolver,
    CommentResolver,
    CommentsActivatorGuard,
    CommentActivatorGuard
  ]
})
export class CommentsModule { }
