import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  blogs!: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let video = document.getElementById("home-video") as HTMLVideoElement;
    video.muted = true;
    video.play();
    this.getBlogs();
  }
  getBlogs() {
    this.http.get<any>("assets/json/blogs.json").subscribe((data) => {
      this.blogs = data.slice(0, 4);
    });
  }
}
