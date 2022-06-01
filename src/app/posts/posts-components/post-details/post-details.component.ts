import { Component, OnInit } from '@angular/core';
import {IPostWithDetails} from "../../../interfaces/IPostWithDetails";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPostWithDetails;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({postData}) => {
      this.post = postData;
    });
  }

}
