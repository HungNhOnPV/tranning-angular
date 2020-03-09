import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortNumber"
})
export class SortNumberPipe implements PipeTransform {
  transform(arrNumber: number[], ...args: number[]): unknown {
    arrNumber.sort((a, b) => {
      if(a > b) return args[0];
      else if(a < b) return -args[0];
      else return 0;
    });
    return [...arrNumber];
  }
}
