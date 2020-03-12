import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let arrStr = value.split(" ");
    let result = "";
    arrStr.forEach((str, index) => {
      result +=
        str.charAt(0).toUpperCase() + str.substr(1) + (index ===
        arrStr.length + 1
          ? ""
          : " ");
    });
    return result;
  }
}
