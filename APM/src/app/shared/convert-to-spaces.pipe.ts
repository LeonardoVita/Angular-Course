import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpaces"
})
export class ConverToSpacesPipe implements PipeTransform{
    transform(value: string, caracter: string, replace: string): string {
        return value.split(caracter).join(replace);
    }
}