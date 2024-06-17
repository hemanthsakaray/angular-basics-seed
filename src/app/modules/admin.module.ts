import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// //Containers
import { DonutSingleComponent } from '../admin/containers/donut-single/donut-single.component';
import { DonutsListComponent } from '../admin/containers/donuts-list/donuts-list.component';
import { LoginDetailsComponent } from '../admin/containers/login-details/login-details.component';

// //components
import { DountCardComponent } from '../admin/components/dount-card/dount-card.component';
import { DonutFormComponent } from '../admin/components/donut-form/donut-form.component';
import { LoginFormComponent } from '../admin/components/login/login-form.component';
import { CheckBoxComponent } from '../admin/components/check-box/check-box.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginDetailsComponent,
  },
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
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginDetailsComponent,
    CheckBoxComponent,
    DonutsListComponent,
    DonutSingleComponent,
    DountCardComponent,
    DonutFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
