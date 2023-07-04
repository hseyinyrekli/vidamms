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
import { DemoComponent } from "./components/demo/demo.component";
import { PolicyComponent } from "./components/policy/policy.component";
import { PrivacyComponent } from "./components/privacy/privacy.component";
import { FeaturesComponent } from "./components/features/features.component";
import { ServiceComponent } from "./components/service/service.component";

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
        path: "support",
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
      {
        path: "demo",
        component: DemoComponent,
      },
      {
        path: "policy",
        component: PolicyComponent,
      },
      {
        path: "privacy",
        component: PrivacyComponent,
      },
      {
        path: "features",
        component: FeaturesComponent,
      },
      {
        path: "services",
        component: ServiceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
