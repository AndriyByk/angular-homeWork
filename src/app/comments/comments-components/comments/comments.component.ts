import { Component, OnInit } from '@angular/core';
import {IComment} from "../../../interfaces/IComment";
import {CommentService} from "../../comments-services/comment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentsData}) => this.comments = commentsData);
  }

}
