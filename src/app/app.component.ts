import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "vidamms-angular";
  lang!: any;

  constructor(private translate: TranslateService, private router: Router) {}

  ngOnInit() {
    let lang = localStorage.getItem("lang") || "tr";
    if (lang == "tr") {
      this.translate.setDefaultLang("tr");
      this.translate.use("tr");
      localStorage.setItem("lang", "tr");
    } else {
      // @ts-ignore
      this.translate.setDefaultLang("en");
      this.translate.use("en");
      localStorage.setItem("lang", "en");
    }
  }
}
