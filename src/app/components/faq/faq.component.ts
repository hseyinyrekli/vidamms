import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  faqs!: any;
  search: string = "";
  lang!: any;
  constructor(private http: HttpClient, public translate: TranslateService) {}
  ngOnInit(): void {
    this.lang = this.translate.currentLang;
    this.getFaqs();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
      this.getFaqs();
    });
  }
  getFaqs() {
    let url = "";
    if (this.lang == "tr") {
      url = "assets/json/faq.json";
    } else {
      url = "assets/json/faq-en.json";
    }
    this.http.get<any>(url).subscribe((data) => {
      this.faqs = data;
    });
  }
}
