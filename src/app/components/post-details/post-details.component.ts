import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPostWithDetails} from "../../interfaces/IPostWithDetails";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPostWithDetails;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      let {data} = history.state;
      if (data != undefined)
        this.post = data;
      else
        this.postService.getPost(id).subscribe(value => this.post = value);
    });
  }
}
