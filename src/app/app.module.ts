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
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}