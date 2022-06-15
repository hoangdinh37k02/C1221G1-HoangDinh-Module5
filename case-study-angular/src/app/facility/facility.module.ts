import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {DeleteFacilityComponent} from '../modal/delete-facility/delete-facility.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    DeleteFacilityComponent,
  ],
    imports: [
        CommonModule,
        FacilityRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        NgxPaginationModule
    ]
})
export class FacilityModule { }
