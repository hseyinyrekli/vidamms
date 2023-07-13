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
  lang!: any;
  constructor(private router: Router, public translate: TranslateService) {}

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
        console.log(event.url, "event.yurl");
      }
    });
    console.log(this.currentPage);

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
    const hreflang = this.lang === "en" ? "en" : "tr";

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "alternate");
    linkElement.setAttribute("hreflang", hreflang);

    document.head.appendChild(linkElement);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }
  changeLanguage(lang: any) {
    this.isShow = lang;
    this.isActive = !this.isActive;
    localStorage.setItem("lang", lang);
    const hreflang = lang === "en" ? "en" : "tr";

    const linkElement = document.querySelector('link[rel="alternate"]');
    if (linkElement) {
      linkElement.setAttribute("hreflang", hreflang);
    }

    if (lang == "tr") {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/en"]);
    }

    setTimeout(() => {
      window.location.reload();
    }, 1);
  }
}
