import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../core/service/utilities.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  disabled: boolean = false;
  constructor(
    private readonly loginService: LoginService,
    private readonly utilitiesService: UtilitiesService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe(
      (res) => {
        if (res) {
          this.utilitiesService.successToastMessage('User Login');
        }
      },
      (err) => {
        this.utilitiesService.errorHandlerMessgae(err.error.msg);
      }
    );
  }
}
