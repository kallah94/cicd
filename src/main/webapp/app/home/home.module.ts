import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WebAppSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [WebAppSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class WebAppHomeModule {}
