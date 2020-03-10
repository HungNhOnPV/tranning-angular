import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(products: any[], ...args: any[]): any {
    if (args[0] === "name") {
      products.sort((a, b) => {
        if (a.name > b.name) return args[1];
        else if (a.name < b.name) return -args[1];
        else return 0;
      });
    }
    if (args[0] === "price") {
      products.sort((a, b) => {
        if (a.price > b.price) return args[1];
        else if (a.price < b.price) return -args[1];
        else return 0;
      });
    }
    return products;
  }
}
