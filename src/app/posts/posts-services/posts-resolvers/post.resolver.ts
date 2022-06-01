import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {IPost} from "../../../interfaces/IPost";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    return this.postService.getOne(route.params['id']);
  }


}
