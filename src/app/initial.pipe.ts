import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name : 'initial'
}) 

export class initialPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        const spl = value.split(' ');
        return spl[0][0] + spl[1][0]
    }
}

