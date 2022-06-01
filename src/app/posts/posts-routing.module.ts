import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {PostResolver} from "./posts-services/posts-resolvers/post.resolver";
import {PostsResolver} from "./posts-services/posts-resolvers/posts.resolver";
import {PostActivatorGuard} from "./posts-services/posts-guards/post-activator.guard";
import {PostsActivatorGuard} from "./posts-services/posts-guards/posts-activator.guard";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canActivate:[PostsActivatorGuard],
    canDeactivate: [PostsActivatorGuard],
    children: [
      {
        path: 'post-details/:id', component: PostDetailsComponent,
        resolve: {postData: PostResolver},
        canActivate: [PostActivatorGuard],
        canDeactivate: [PostActivatorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
