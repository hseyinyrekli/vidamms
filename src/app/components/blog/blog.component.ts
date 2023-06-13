import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.activeMenu = "all";
    this.http.get<any>("assets/json/blogs.json").subscribe((data) => {
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
