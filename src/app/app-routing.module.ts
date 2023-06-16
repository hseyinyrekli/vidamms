import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutsComponent } from "./components/layouts/layouts.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FaqComponent } from "./components/faq/faq.component";
import { BlogDetailComponent } from "./components/blog/blog-detail/blog-detail.component";
import { CostComponent } from "./components/cost/cost.component";
import { ReferenceComponent } from "./components/reference/reference.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutsComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "blog",
        component: BlogComponent,
      },
      {
        path: "blog/:slug",
        component: BlogDetailComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "faq",
        component: FaqComponent,
      },
      {
        path: "cost",
        component: CostComponent,
      },
      {
        path: "reference",
        component: ReferenceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
