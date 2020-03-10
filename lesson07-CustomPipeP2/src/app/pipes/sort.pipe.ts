import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from "lodash";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(products: any[], ...args: any[]): any {
    if (args[0] === "name") {
      products = orderBy(
        products,
        ["name"],
        [args[1] === 1 ? "asc" : "desc"]
      );
    }
    if (args[0] === "price") {
      products = orderBy(
        products,
        ["price"],
        [args[1] === 1 ? "asc" : "desc"]
      );
    }
    return products;
  }
}
