import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {PostService} from "../post.service";
import {IPost} from "../../../interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getAll();
  }
}
