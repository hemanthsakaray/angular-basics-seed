import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-details',
  template: `
    <div>
      <app-login-form (submitted)="createUser($event)">
        <h3>SignUp Account</h3>
        <button type="submit" class="btn btn--green">SignIn</button>
      </app-login-form>
      <app-login-form (submitted)="loginUser($event)">
        <h3>Login Account</h3>
        <app-check-box (rememberUser)="rememberUser(true)"></app-check-box>
        <button type="submit" class="btn btn--green">Login</button>
      </app-login-form>
    </div>
  `,
  styles: [],
})
export class LoginDetailsComponent {
  rememberMe: boolean = false;

  rememberUser(rememberUser: boolean) {
    this.rememberMe = rememberUser;
    console.log('remember me', this.rememberMe);
  }
  createUser(user: User) {
    console.log('create user here');
  }

  loginUser(user: User) {
    console.log('login user here', user, this.rememberMe);
  }
}
