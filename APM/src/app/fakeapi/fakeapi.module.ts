import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FakeApiComponent } from './fakeapi.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FakeApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "fakeapi", component: FakeApiComponent}
    ]),
    SharedModule
  ]
})
export class FakeapiModule { }
