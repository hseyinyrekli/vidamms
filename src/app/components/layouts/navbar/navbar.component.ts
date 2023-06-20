import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  activeMenu = "home";

  changeActive(name: any) {
    this.activeMenu = name;
  }
}
