import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  faqs!: any;
  search: string = "";
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getFaqs();
  }
  getFaqs() {
    this.http.get<any>("assets/json/faq.json").subscribe((data) => {
      this.faqs = data;
    });
  }
}
