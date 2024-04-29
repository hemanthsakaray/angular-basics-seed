import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// //Containers
import { DonutSingleComponent } from '../admin/containers/donut-single/donut-single.component';
import { DonutsListComponent } from '../admin/containers/donuts-list/donuts-list.component';

// //components
import { DountCardComponent } from '../admin/components/dount-card/dount-card.component';
import { DonutFormComponent } from '../admin/components/donut-form/donut-form.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'donuts', component: DonutsListComponent },
  {
    path: 'donuts/new',
    component: DonutSingleComponent,
    data: { isEdit: false },
  },
  {
    path: 'donuts/:id',
    component: DonutSingleComponent,
    data: { isEdit: true },
  },
  { path: '', pathMatch: 'full', redirectTo: 'donuts' },
];

@NgModule({
  declarations: [
    DonutsListComponent,
    DonutSingleComponent,
    DountCardComponent,
    DonutFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
