import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "vidamms-angular";

  constructor(translate: TranslateService) {
    translate.setDefaultLang("tr");
    translate.use("tr");
  }
}
