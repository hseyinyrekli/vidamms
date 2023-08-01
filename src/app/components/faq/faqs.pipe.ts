import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "faqs",
})
export class FaqsPipe implements PipeTransform {
  transform(value: any[], search: any) {
    if (!search) {
      return value; 
    }

    const searchRegex = new RegExp(search, 'i');

    return value.filter((p) => searchRegex.test(p.button));
  }
}
