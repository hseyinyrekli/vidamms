import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  blogs!: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs() {
    this.http.get<any>("assets/json/blogs.json").subscribe((data) => {
      this.blogs = data.slice(0, 4);
    });
  }
}
