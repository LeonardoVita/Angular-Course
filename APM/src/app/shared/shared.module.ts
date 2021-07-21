import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ConverToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConverToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConverToSpacesPipe
  ]
})
export class SharedModule { }
