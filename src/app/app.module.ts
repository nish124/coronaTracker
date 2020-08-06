import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { HeaderpartComponent } from './headerpart/headerpart.component';
import { FooterpartComponent } from './footerpart/footerpart.component';
import { MidpartComponent } from './midpart/midpart.component';                  //api
import {CarouselModule} from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { WorldComponent } from './world/world.component';
import { IndiacasesComponent } from './indiacases/indiacases.component';
import { AllcountrycasesComponent } from './allcountrycases/allcountrycases.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MylistComponent } from './mylist/mylist.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderpartComponent,
    FooterpartComponent,
    MidpartComponent,
    WorldComponent,
    IndiacasesComponent,
    AllcountrycasesComponent,
    AboutComponent,
    MylistComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    FontAwesomeModule,
    DataTablesModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }