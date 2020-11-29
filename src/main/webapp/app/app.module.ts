import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WebAppSharedModule } from 'app/shared/shared.module';
import { WebAppCoreModule } from 'app/core/core.module';
import { WebAppAppRoutingModule } from './app-routing.module';
import { WebAppHomeModule } from './home/home.module';
import { WebAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WebAppSharedModule,
    WebAppCoreModule,
    WebAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WebAppEntityModule,
    WebAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class WebAppAppModule {}
