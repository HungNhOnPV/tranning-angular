import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], ...args: string[]): any {
    if (!args) {
      return products;
    } else {
      if (args[0]) {
        products = products.filter(x => {
          return x.id.toString().indexOf(args[0]) !== -1;
        });
      }
      if (args[1]) {
        products = products.filter(x => {
          return x.name.toLowerCase().indexOf(args[1].toLowerCase()) !== -1;
        });
      }
      if (args[2]) {
        products = products.filter(x => {
          return x.status.toString().toLowerCase().indexOf(args[2].toLowerCase()) !== -1;
        });
      }
      return products;
    }
  }
}
