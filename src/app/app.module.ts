import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'page1', component:  Page1Component},
      {path: 'page2', component:  Page2Component},
      {path: 'page3', component:  Page3Component},
      {path: 'page4', component:  Page4Component},
      {path: 'page5', component:  Page5Component},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
