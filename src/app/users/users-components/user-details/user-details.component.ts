import {Component, Input, OnInit} from '@angular/core';
import {IUserWithDetails} from "../../../interfaces/IUserWithDetails";
import {UserService} from "../../users-services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: IUserWithDetails;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.userService.getOne(id).subscribe(value => this.user = value);
    })
  }

}
