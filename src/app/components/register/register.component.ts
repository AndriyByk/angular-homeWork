import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthorisationService} from "../../services/authorisation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loginError: string;

  constructor(private authorisationService: AuthorisationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.pattern('^[a-z]{1}[a-z0-9_-]{1,19}$'),
        Validators.required]),
      password: new FormControl(null, [
        Validators.pattern('[a-zA-Z0-9_-]{2,20}'),
        Validators.required]),
      confirmPassword: new FormControl(null, [
        Validators.pattern('[a-zA-Z0-9_-]{2,20}'),
        Validators.required])
    }, [this.checkPassword])
  }

  register(): void {
    const rawUser = this.form.getRawValue();
    delete rawUser.confirmPassword;
    this.authorisationService.register(rawUser).subscribe(() => {
      this.router.navigate(['login']);
    },
        error => this.loginError = error.error.login[0]
    )
  }

  checkPassword(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {different: "паролі не співпадають!"};
  }
}
