import { Component } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
})
export class DemoComponent {
  activeCategories = "demo1";
  lang: any;

  changeActive(name: any) {
    this.activeCategories = name;
  }
}
