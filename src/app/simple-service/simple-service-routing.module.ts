import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleServiceComponent } from './simple-service.component';

const routes: Routes = [{ path: '', component: SimpleServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleServiceRoutingModule { }
