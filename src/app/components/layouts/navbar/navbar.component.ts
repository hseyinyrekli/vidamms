import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";
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
  isScrolled: boolean = false;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private el: ElementRef,
    public translate: TranslateService
  ) {}

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

  changeActive(name: any) {
    this.activeMenu = name;
  }

  changeLanguage(lang: any) {
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
      return "bg-dark-blue";
    }
  }
}
