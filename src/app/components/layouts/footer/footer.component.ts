import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  blogs!: any;
  lang!: any;
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
    let url = "";
    if (this.lang == "tr") {
      url = "assets/json/blogs.json";
    } else {
      url = "assets/json/blogs-en.json";
    }
    this.http.get<any>(url).subscribe((data) => {
      this.blogs = data.slice(0, 4);
    });
  }
}
