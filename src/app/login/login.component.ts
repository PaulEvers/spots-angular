import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.generateForm();
  }

  private generateForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(username, password).then(result => {
      if (result === true) {
        this.router.navigate(['/admin/home']);
      } else {
        this.error = 'Incorrect login';
      }
    });
  }

}
