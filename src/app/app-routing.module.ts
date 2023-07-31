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

const routesTR: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutsComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },

      {
        path: "hakkimizda",
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
        path: "iletisim",
        component: ContactComponent,
      },
      {
        path: "destek",
        component: FaqComponent,
      },
      {
        path: "maaliyet",
        component: CostComponent,
      },
      {
        path: "referanslar",
        component: ReferenceComponent,
      },
      {
        path: "vida-bakim-yonetim-uygulamasi",
        component: DemoComponent,
      },
      {
        path: "politika",
        component: PolicyComponent,
      },
      {
        path: "guvenlik",
        component: PrivacyComponent,
      },
      {
        path: "ozellikler",
        component: FeaturesComponent,
      },
      { path: "**", redirectTo: "/" },
    ],
  },
];

const routesEN: Routes = [
  {
    path: "",
    redirectTo: "/en",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutsComponent,
    children: [
      {
        path: "en",
        component: HomeComponent,
      },
      {
        path: "en/home",
        component: HomeComponent,
      },

      {
        path: "en/about",
        component: AboutComponent,
      },
      {
        path: "en/blog",
        component: BlogComponent,
      },
      {
        path: "blog/:slug",
        component: BlogDetailComponent,
      },
      {
        path: "en/contact",
        component: ContactComponent,
      },
      {
        path: "en/support",
        component: FaqComponent,
      },
      {
        path: "en/cost",
        component: CostComponent,
      },
      {
        path: "en/reference",
        component: ReferenceComponent,
      },
      {
        path: "en/screw-maintenance-management-application",
        component: DemoComponent,
      },
      {
        path: "en/policy",
        component: PolicyComponent,
      },
      {
        path: "en/privacy",
        component: PrivacyComponent,
      },
      {
        path: "en/features",
        component: FeaturesComponent,
      },
      { path: "**", redirectTo: "/en", pathMatch: "full" },
    ],
  },
];

let routes: Routes = [];


let lang = localStorage.getItem("lang") || "tr";
if (lang == "tr") {
  routes = routesTR;
} else {
  routes = routesEN;
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
