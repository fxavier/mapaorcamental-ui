import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule,
         MatButtonModule,
         MatButtonToggleModule,
         MatIconModule,
         MatDatepickerModule,
         MatSidenavModule,
         MatToolbarModule,
         MatTooltipModule,
         MatListModule,
         MatBadgeModule,
         MatCardModule,
         MatTabsModule,
         MatTableModule,
         MatInputModule } from '@angular/material';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
         CommonModule,
         RouterModule,
         FormsModule,

         FlexLayoutModule,

         MatFormFieldModule,
         MatButtonModule,
         MatButtonToggleModule,
         MatIconModule,
         MatDatepickerModule,
         MatSidenavModule,
         MatToolbarModule,
         MatTooltipModule,
         MatListModule,
         MatBadgeModule,
         MatCardModule,
         MatTabsModule,
         MatTableModule,
         MatInputModule
    

  ],
  exports: [
         CommonModule,
         RouterModule,
         FormsModule,

         FlexLayoutModule,

         MatFormFieldModule,
         MatButtonModule,
         MatButtonToggleModule,
         MatIconModule,
         MatDatepickerModule,
         MatSidenavModule,
         MatToolbarModule,
         MatTooltipModule,
         MatListModule,
         MatBadgeModule,
         MatCardModule,
         MatTabsModule,
         MatTableModule,
         MatInputModule
  ]
})
export class SharedModule { }
