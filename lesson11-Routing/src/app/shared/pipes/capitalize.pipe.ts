import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let result = '';
    let splited = value
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .forEach((value, index) => {
        result +=
          value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + " ";
      });
    return result;
  }
}
