import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MetaService {
  value!: any;
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  setMetas(value: any) {
    this.deleteMetaTag();

    this.createMetaTR(value);
  }

  createMetaTR(value: any) {
    let meta: HTMLMetaElement = this.doc.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", value);
    this.doc.head.appendChild(meta);
  }

  createMetaEN(value: any) {
    let meta: HTMLMetaElement = this.doc.createElement("meta");
    meta.setAttribute("name", "description");

    meta.setAttribute("content", value);
    this.doc.head.appendChild(meta);
  }

  deleteMetaTag() {
    const head = document.getElementsByTagName("head")[0];
    const metaElements = head.getElementsByTagName("meta");
    let removed;
    for (var i = 0; i < metaElements.length; i++) {
      var metaElement = metaElements[i];
      if (metaElement.getAttribute("name") === "description") {
        removed = metaElement;
      }
      if (removed) {
        head.removeChild(removed);
      }
    }
  }
}
