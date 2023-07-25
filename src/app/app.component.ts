import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "vidamms-angular";
  lang!: any;

  constructor(private translate: TranslateService, private router: Router) {
    if (localStorage.getItem("lang")) {
      let lang = localStorage.getItem("lang");
      // @ts-ignore
      translate.setDefaultLang(lang);
      // @ts-ignore
      translate.use(lang);
    } else {
      translate.setDefaultLang("tr");
      translate.use("tr");
      localStorage.setItem("lang", "tr");
      console.log("tr")
    }
  }
}
