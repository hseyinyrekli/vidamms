import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "app-blog-detail",
    templateUrl: "./blog-detail.component.html",
    styleUrls: ["./blog-detail.component.scss"],
})
export class BlogDetailComponent implements OnInit {
    blog!: any;
    url!: any;
    lang!: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((data) => {
            let slug = data["slug"];
            this.getBlogBySlug(slug);
        });
    }

    getBlogBySlug(slug: any) {
        let lang = localStorage.getItem("lang");
        if (lang == "tr") {
            this.url = 'assets/json/blogs.json'
        } else {
            this.url = 'assets/json/blogs-en.json'
        }
        this.http.get<any>(this.url).subscribe((data) => {
            this.blog = data.filter((x: any) => x.slug == slug)[0];
        });
    }
}
