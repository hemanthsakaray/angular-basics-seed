import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ContentChildren,
  AfterContentInit,
  QueryList,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CheckBoxComponent } from '../check-box/check-box.component';

@Component({
  selector: 'app-login-form',
  template: `
    <div>
      <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
        <ng-content select="h3"></ng-content>
        <label
          >Email Adderss
          <input
            type="email"
            name="email"
            class="input"
            placeholder="xyz@emailadderss.com"
            #email="ngModel"
            required
            ngModel
          />
          <ng-container *ngIf="email.invalid && email.touched">
            <div class="login-form-error" *ngIf="email.errors?.required">
              Email is required.
            </div>
          </ng-container>
        </label>
        <label
          >Password
          <input
            class="input"
            type="password"
            name="password"
            placeholder="enter password here!!"
            #password="ngModel"
            [minlength]="5"
            required
            ngModel
          />
        </label>
        <ng-container *ngIf="password.invalid && password.touched">
          <div class="login-form-error" *ngIf="password.errors?.required">
            password is required.
          </div>
          <div class="login-form-error" *ngIf="password.errors?.minlength">
            Min length of password should be greater than 5 characters.
          </div>
        </ng-container>
        <ng-content select="app-check-box"> </ng-content>
        <div *ngIf="showMsg">You will be logged in for 30 days</div>
        <ng-content select="button"></ng-content>
        <ng-container *ngIf="form.valid && form.submitted">
          working...
        </ng-container>
      </form>
    </div>
  `,
  styles: [
    `
      .login-form {
        &-error {
          font-size: 12px;
          color: #e66262;
        }
      }
    `,
  ],
})
export class LoginFormComponent implements AfterContentInit, AfterViewInit {
  @Input() user!: User;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChildren(CheckBoxComponent)
  rememberChild!: QueryList<CheckBoxComponent>;

  @ViewChild('email') email!: ElementRef;

  showMsg!: boolean;

  ngAfterViewInit(): void {
    console.log(this.email);
  }

  ngAfterContentInit(): void {
    if (this.rememberChild) {
      this.rememberChild.map((item) => {
        item.checked.subscribe((checked: boolean) => {
          this.showMsg = checked;
        });
      });
      console.log(this.showMsg);
    }
  }
  onSubmit(value: User) {
    this.submitted.emit(value);
    console.log('Form has been submitted successfully!!');
  }
}
