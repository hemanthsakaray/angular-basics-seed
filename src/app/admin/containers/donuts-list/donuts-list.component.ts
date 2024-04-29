import { Component, OnInit } from '@angular/core';
import { Donut } from 'src/app/models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donuts-list',
  template: `
    <div>
      <div class="donut-list-actions">
        <a routerLink="new" class="btn btn--green"
          >New Donut <img src="/assets/img/icon/plus.svg"
        /></a>
      </div>

      <div>
        <ng-container *ngIf="donuts?.length; then cards; else nothing">
        </ng-container>
        <ng-template #cards>
          <app-dount-card
            *ngFor="let donut of donuts; trackBy: trackById"
            [donut]="donut"
          ></app-dount-card>
        </ng-template>
        <ng-template #nothing>
          <p>No donuts avaliable now!!</p>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .donut-list {
        &-actions {
          margin-bottom: 10px;
        }
      }
    `,
  ],
})
export class DonutsListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}
  ngOnInit(): void {
    this.donutService
      .read()
      .subscribe((donuts: Donut[]) => (this.donuts = donuts));
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
