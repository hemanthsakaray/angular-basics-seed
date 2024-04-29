import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from 'src/app/models/donut.model';

@Component({
  selector: 'app-donut-form',
  template: `
    <form class="donut-form" #form="ngForm" *ngIf="donut; else loading">
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          class="input"
          minlength="5"
          required
          [ngModel]="donut.name"
          #name="ngModel"
        />
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="donut-form-error" *ngIf="name.errors?.required">
            Name is required.
          </div>
          <div class="donut-form-error" *ngIf="name.errors?.minlength">
            Min length should be greater than 5.
          </div>
        </ng-container>
      </label>
      <label>
        <span>Icon</span>
        <select
          name="icon"
          class="input input--select"
          required
          [ngModel]="donut.icon"
          #icon="ngModel"
        >
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="donut-form-error" *ngIf="icon.errors?.required">
            Please select a icon from to drop-down list.
          </div>
        </ng-container>
      </label>
      <label>
        <span>Price</span>
        <input
          type="number"
          name="price"
          class="input"
          required
          [ngModel]="donut.price"
          #price="ngModel"
        />
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Price is required.
          </div>
        </ng-container>
      </label>
      <div class="donut-form-radio">
        <p class="donut-form-radio-label">Promo:</p>
        <label>
          <input
            type="radio"
            name="promo"
            [value]="undefined"
            [ngModel]="donut.promo"
          />
          <span>None</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="new"
            [ngModel]="donut.promo"
          />
          <span>New</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="limited"
            [ngModel]="donut.promo"
          />
          <span>Limited</span>
        </label>
      </div>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          placeholder="Enter your product description here"
          class="input input--textarea"
          minlength="5"
          required
          [ngModel]="donut.description"
          #desc="ngModel"
        ></textarea>
        <ng-container *ngIf="desc.invalid && desc.touched">
          <div class="donut-form-error" *ngIf="desc.errors?.required">
            description is required.
          </div>
          <div class="donut-form-error" *ngIf="desc.errors?.minlength">
            Min length should be greater than 5.
          </div>
        </ng-container>
      </label>
      <button
        type="button"
        class="btn btn--green"
        *ngIf="!isEdit"
        (click)="createBtn(form)"
      >
        Submit
      </button>
      <button
        type="button"
        class="btn btn--green"
        *ngIf="isEdit"
        (click)="updateBtn(form)"
      >
        update
      </button>
      <button
        type="button"
        class="btn btn--grey"
        *ngIf="form.touched || isEdit"
        (click)="form.resetForm()"
      >
        Reset
      </button>
      <button
        type="button"
        class="btn btn--grey"
        *ngIf="isEdit"
        (click)="deleteBtn()"
      >
        Delete
      </button>
      <div class="donut-form-working" *ngIf="form.valid && form.submitted">
        working...
      </div>
    </form>
    <ng-template #loading>Loading...</ng-template>
  `,
  styles: [
    `
      .donut-form {
        &-radio {
          display: flex;
          align-content: center;
          &-label {
            margin-right: 10px;
          }
          label {
            display: flex;
            align-content: center;
            span {
              color: #444;
              margin-bottom: 0;
            }
          }
        }
        &-working {
          font-size: 12px;
          font-style: italic;
          margin: 10px 0;
        }
        &-error {
          font-size: 12px;
          color: #e66262;
        }
      }
    `,
  ],
})
export class DonutFormComponent implements OnInit {
  @Input() donut!: Donut;
  @Input() isEdit!: boolean;

  @Output() create = new EventEmitter<Donut>();

  @Output() update = new EventEmitter<Donut>();

  @Output() delete = new EventEmitter<Donut>();

  icons: string[] = [
    'caramel-swril',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  ngOnInit(): void {}

  createBtn(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

  updateBtn(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.donut.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  deleteBtn() {
    if (confirm(`Delete this donut ${this.donut.name}`))
      this.delete.emit({ ...this.donut });
  }
}
