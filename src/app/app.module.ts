import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './root/app.component';
import { headerComponent } from './components/header/header';
import { footerComponent } from './components/footer/footer';
import { AppDetailComponent } from './components/partials/appDetailComponent/detail.component';
import { BrowseComponent } from './components/partials/browse/browse.component';
import { genericComponent } from './components/partials/generic/generic';
import { split } from './components/partials/browse/arrayPipe';
import { reactiveFormComponent } from './components/partials/reactiveForm/reactiveForm';
import { TemplateFormComponent } from './components/partials/templateForm/templateForm';
import { DataGridComponent} from './components/partials/data-grid/data-grid';
import { MoneyComponent } from './core/components/money/money.component';
import { PricelookupComponent } from './core/components/pricelookup/pricelookup.component';
import { PriceFilterPipe } from './core/components/money/price-filter.pipe';
import { KeysPipe } from './components/partials/filterandsort/menuPipe';
import { FilterandsortComponent } from './components/partials/filterandsort/filterandsort.component';
import { BrowseGridComponent } from './components/partials/productgrid/product.grid.component';
import { CreditPageComponent } from './components/partials/credit-page/credit-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { SlickModule } from 'ngx-slick';

import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { LoginComponent } from './components/partials/login/login.component';
import {AuthGuard } from './core/services/guards.guard';
import {AuthService } from './core/services/authService';
import { ProductSliderComponent } from './components/partials/product-slider-component/product-slider-component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
    path: 'login',
    component: LoginComponent  },
  { path: 'cell-phones', component: BrowseComponent, canActivate: [AuthGuard]},
  { path: 'accessories', component: BrowseComponent , canActivate: [AuthGuard]},
  { path: 'internet-devices', component: BrowseComponent , canActivate: [AuthGuard]},
   {
    path: 'cell-phones/:offerId',
    component: AppDetailComponent
  },
  {
    path: 'accessories/:offerId',
    component: AppDetailComponent
  },
  {
    path: 'internet-devices/:offerId',
    component: AppDetailComponent
  },
    { path: 'reactive', component: reactiveFormComponent, canActivate: [AuthGuard] },
  { path: 'template', component: TemplateFormComponent,
canActivate: [AuthGuard]
},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    AppDetailComponent,
    BrowseComponent,
    genericComponent,
    split,
    reactiveFormComponent,
    TemplateFormComponent,
    DataGridComponent,
    MoneyComponent,
    PricelookupComponent,
    PriceFilterPipe,
    KeysPipe,
    FilterandsortComponent,
    BrowseGridComponent,
    CreditPageComponent,
    NotFoundComponent,
    LoginComponent,
    ProductSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rotatingPlane,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '10px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: true
  }),
    RouterModule.forRoot(routes, { useHash: false}),
    SlickModule.forRoot()
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
