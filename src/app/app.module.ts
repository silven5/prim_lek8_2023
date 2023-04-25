import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GetAllElephantsUsecase } from './core/usecases/get-all-elephants.usecase';
import { HttpClientModule } from '@angular/common/http';
import { ElephantRepository } from './core/repositories/elephant.repository';
import { ElephantWebRepository } from './date/repository/elephant_web_repository/elephant-web.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
    provide: ElephantRepository,
    useClass: ElephantWebRepository
    // useClass: ElephantMockRepository
  }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
