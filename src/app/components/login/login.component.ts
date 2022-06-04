import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthorisationService} from "../../services/authorisation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authorisationService : AuthorisationService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login(): void {
    this.authorisationService.login(this.form.getRawValue()).subscribe(value => {
      console.log("login component............." + value.access);
      this.authorisationService.setToken(value);
      this.router.navigate(['cars']);
    })
  }
}
