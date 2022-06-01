import { Component, OnInit } from '@angular/core';
import {ICommentWithDetails} from "../../../interfaces/ICommentWithDetails";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: ICommentWithDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(({commentData}) => {
      this.comment = commentData;
    })
  }

}
