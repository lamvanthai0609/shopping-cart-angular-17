import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'chat',
    standalone: true,
})
export class ChatPipe implements PipeTransform {
    transform(value: string): string {
        return value ? value.slice(0, 100) : '';
    }
}
