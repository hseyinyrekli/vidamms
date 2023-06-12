import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.scss"],
})
export class BlogDetailComponent implements OnInit {
  blog!: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let slug = data["slug"];
      this.getBlogBySlug(slug);
    });
  }

  getBlogBySlug(slug: any) {
    this.http.get<any>("assets/json/blogs.json").subscribe((data) => {
      this.blog = data.filter((x: any) => x.slug == slug)[0];
    });
  }
}
