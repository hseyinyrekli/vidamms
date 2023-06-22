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

  constructor(
    private router: Router,
    private http: HttpClient,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getBlogs(this.translate.currentLang);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getBlogs(event.lang);
    });
  }

  getBlogs(lang: any) {
    this.activeMenu = "all";
    let url = "";
    if (lang == "tr") {
      url = "assets/json/blogs.json";
    } else {
      url = "assets/json/blogs-en.json";
    }
    this.http.get<any>(url).subscribe((data) => {
      console.log(data);

      this.blogs = data;
      this.baseBlogs = data;
    });
  }

  goToDetailPage(name: any) {
    this.router.navigate(["blog/" + name]);
  }

  changeForSubtitle(name: any) {
    this.activeMenu = name;
    this.blogs = this.baseBlogs.filter((x: any) => x.subTitle == name);
  }
}
