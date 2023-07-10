import { Component, HostListener, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  activeMenu = "home";
  currentPage!: string;
  isShow = localStorage.getItem("lang");
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
    this.getCurrentLang();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  changeLanguage(lang: any) {
    this.isShow = lang;
    this.isActive = !this.isActive;
    localStorage.setItem("lang", lang);
    this.router.navigate(["/"]);
    setTimeout(() => {
      window.location.reload();
    }, 1);
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

  lang!: any;
  getCurrentLang() {
    this.lang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }
}
