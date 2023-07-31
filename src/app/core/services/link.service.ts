import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LinkService {
  baseUrl = "https://vidamms.com";
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  setLinks(tr: any, en: any) {
    this.deleteLinkAlternate();
    this.createLinkEN(en);
    this.createLinkTR(tr);
  }

  createLinkTR(page: any) {
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("href", `${this.baseUrl}${page}`);
    link.setAttribute("hreflang", "tr");
    this.doc.head.appendChild(link);
  }

  createLinkEN(page: any) {
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("href", `${this.baseUrl}${page}`);
    link.setAttribute("hreflang", "en");
    this.doc.head.appendChild(link);
  }

  deleteLinkAlternate() {
    const head = document.getElementsByTagName("head")[0];
    const linkElements = head.getElementsByTagName("link");
    let removedTR, removedEN;
    for (var i = 0; i < linkElements.length; i++) {
      var linkElement = linkElements[i];
      if (linkElement.getAttribute("hreflang") === "en") {
        removedEN = linkElement;
      }
      if (linkElement.getAttribute("hreflang") === "tr") {
        removedTR = linkElement;
      }
    }
    if (removedTR && removedEN) {
      head.removeChild(removedTR);
      head.removeChild(removedEN);
    }
  }
}
