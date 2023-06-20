import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "faqs",
})
export class FaqsPipe implements PipeTransform {
  transform(value: any[], search: any) {
    return value.filter((p) =>
      p.text.toLowerCase().includes(search.toLowerCase())
    );
  }
}
