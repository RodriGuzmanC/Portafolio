import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { MiniaturasComponent } from './miniaturas/miniaturas.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    MiniaturasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
