import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(private http: HttpClient) {}
  sendDemoRequest(body: any) {
    let url = "https://crm.heyteknoloji.com/crm/heysm/api/v1/DemoRequest";
    return this.http.post(url, body).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
