import { Component, OnInit } from '@angular/core';
import {ICommentWithDetails} from "../../../interfaces/ICommentWithDetails";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../comments-services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: ICommentWithDetails;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.commentService.getOne(id).subscribe(value => this.comment = value);
    })
  }

}
