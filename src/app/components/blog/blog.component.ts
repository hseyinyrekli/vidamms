import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogs!: any;
  baseBlogs!: any;
  isActive: boolean = true;
  activeMenu!: any;
  lang!: any;
  url!: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
    this.getBlogs();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
      this.getBlogs();
    });
  }

  getBlogs() {
    this.activeMenu = "all";
    this.url = "";
    if (this.lang == "tr") {
      this.url = "assets/json/blogs.json";
    } else {
      this.url = "assets/json/blogs-en.json";
    }
    this.http.get<any>(this.url).subscribe((data) => {
      this.blogs = data;
      this.baseBlogs = data;
    });
  }

  goToDetailPage(name: any) {
    this.router.navigate([`blog/${name}`], { queryParams: { url: this.url } });
  }

  changeForFilter(name: any) {
    this.activeMenu = name;
    this.blogs = this.baseBlogs.filter((x: any) => x.filter == name);
  }
}
