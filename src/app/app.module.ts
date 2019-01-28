import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AngularMaterialModule } from './angularMaterial/angularMaterial.module';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductModule, RouterModule.forRoot([]), CoreModule,
    AngularMaterialModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
      name:"String Store Redux"
    }),
  
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
