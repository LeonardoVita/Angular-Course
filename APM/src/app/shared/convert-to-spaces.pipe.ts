import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpaces"
})
export class ConverToSpacesPipe implements PipeTransform{
    transform(value: string, caracter: string): string {
        return value.replace(caracter, " ");
    }

}