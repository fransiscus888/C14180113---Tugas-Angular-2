import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";

import { Page2Component } from "../page2/page2.component";
import { Page1Component } from "../page1/page1.component";
import { Page3Component } from "../page3/page3.component";
import { GlobalvarService } from './globalvar.service';

const ROUTES: Routes = [
  { path: "page2", component: Page2Component },
  { path: "page1", component: Page1Component },
  { path: "page3", component: Page3Component }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    Page2Component,
    Page1Component,
    Page3Component
  ],
  bootstrap: [AppComponent],
  providers: [GlobalvarService]
})
export class AppModule {}
