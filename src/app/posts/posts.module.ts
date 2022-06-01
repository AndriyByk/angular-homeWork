import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import { PostComponent } from './posts-components/post/post.component';
import {PostService} from "./posts-services/post.service";
import {HttpClientModule} from "@angular/common/http";
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import {PostsResolver} from "./posts-services/posts-resolvers/posts.resolver";
import {PostResolver} from "./posts-services/posts-resolvers/post.resolver";
import {PostsActivatorGuard} from "./posts-services/posts-guards/posts-activator.guard";
import {PostActivatorGuard} from "./posts-services/posts-guards/post-activator.guard";

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostService,
    PostsResolver,
    PostResolver,
    PostsActivatorGuard,
    PostActivatorGuard
  ]
})
export class PostsModule { }
