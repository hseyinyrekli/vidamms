import { Component, HostListener, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  activeMenu = "home";
  currentPage!: string;
  isShow = "tr";
  isActive: boolean = false;
  isScrolled: boolean = false;

  constructor(private router: Router, public translate: TranslateService) {}

  ngOnInit(): void {
    this.currentPage = this.router.url.replace("/", "");
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
        this.currentPage = event.url.replace("/", "");
      }
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  changeLanguage(lang: any) {
    this.isShow = lang;
    this.isActive = !this.isActive;
    this.translate.use(lang);
  }

  setClass() {
    if (this.currentPage == "") {
      if (this.isScrolled) {
        return "isScrolled";
      }
      return "";
    } else {
      if (this.isScrolled) {
        return "isScrolled";
      }
      return "bg-color";
    }
  }

  closeMenu() {
    const element = document.getElementById(
      "navbarSupportedContent"
    ) as HTMLElement;

    if (element) {
      element.classList.remove("show");
    }
  }
}
