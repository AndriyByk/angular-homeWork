import {Component, Input, OnInit} from '@angular/core';
import {IUserWithDetails} from "../../../interfaces/IUserWithDetails";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: IUserWithDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(({userData}) => {
      this.user = userData;
    })
  }
}
