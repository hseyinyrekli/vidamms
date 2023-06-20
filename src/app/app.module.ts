import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";

import { ContactComponent } from "./components/contact/contact.component";
import { BlogComponent } from "./components/blog/blog.component";
import { LayoutsComponent } from "./components/layouts/layouts.component";
import { NavbarComponent } from "./components/layouts/navbar/navbar.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaqComponent } from "./components/faq/faq.component";
import { BlogDetailComponent } from "./components/blog/blog-detail/blog-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { ReferenceComponent } from "./components/reference/reference.component";
import { CostComponent } from "./components/cost/cost.component";
import { FaqsPipe } from './components/faq/faqs.pipe';
import { DemoComponent } from './components/demo/demo.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    LayoutsComponent,
    NavbarComponent,
    FooterComponent,
    FaqComponent,
    BlogDetailComponent,
    ReferenceComponent,
    CostComponent,
    FaqsPipe,
    DemoComponent,
    PolicyComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
