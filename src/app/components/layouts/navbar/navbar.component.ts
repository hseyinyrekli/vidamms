import { Component, HostListener, OnInit } from "@angular/core";

import { Router, NavigationEnd } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { LinkService } from "src/app/core/services/link.service";

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
  lang!: any;
  constructor(
    private router: Router,
    public translate: TranslateService,
    private linkService: LinkService
  ) {}

  ngOnInit(): void {
    let currentPage = this.router.url.replace("/", "");
    if (currentPage == "en") {
      this.currentPage = "";
    } else {
      this.currentPage = currentPage;
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
        if (event.url == "/en" || event.url == "/") {
          this.currentPage = "";
        }
        this.setLinkAlternate(event.url);
      }
    });
    this.setLinkAlternate(this.router.url);
    this.getCurrentLang();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
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
  getCurrentLang() {
    this.lang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }
  changeLanguage(lang: any) {
    this.isShow = lang;
    this.isActive = !this.isActive;
    localStorage.setItem("lang", lang);
    if (lang == "tr") {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/en"]);
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  setLinkAlternate(route?: any) {
    setTimeout(() => {
      let lang = localStorage.getItem("lang");
      let tr, en;
      if (lang == "en") {
        en = route;
        tr = this.translate.instant("ROUTER." + route.replace(/\//g, ""));
      }
      if (lang == "tr") {
        tr = route;
        en = this.translate.instant("ROUTER." + route.replace(/\//g, ""));
        if (en !== "/en") {
          en = "/en/" + en;
        }
      }
      this.linkService.setLinks(`${tr}`, `${en}`);
    }, 100);
  }
}
