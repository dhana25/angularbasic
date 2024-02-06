import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'strtoarr'
})

export class splpipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return value.split("")
    }
}