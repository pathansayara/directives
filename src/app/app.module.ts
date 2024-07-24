import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './mycomponent/first-component/first-component.component';
import { Cnc1Component } from './cnc1/cnc1.component';
import { Cnc2Component } from './cnc2/cnc2.component';
import { ChangeMeDirective } from './shared/change-me.directive';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DatalistComponent } from './datalist/datalist.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ChildComponent } from './child/child.component';
import { PrentComponent } from './prent/prent.component';
import { AnotherparentComponent } from './anotherparent/anotherparent.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    Cnc1Component,
    Cnc2Component,
    ChangeMeDirective,
    ReactiveformComponent,
    DatalistComponent,
    CustomDirectiveDirective,
    ChildComponent,
    PrentComponent,
    AnotherparentComponent,
    ModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
