import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {IComment} from "../../../interfaces/IComment";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    return this.commentService.getOne(route.params['id']);
  }

}
