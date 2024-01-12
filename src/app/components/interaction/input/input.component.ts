import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorMessages } from '@/util/validation';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './input.component.html',
})
export class InputComponent {
    @Input() formControlName!: string;
    @Input() formGroup!: FormGroup;
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() errors: Record<string, boolean> | null = null;
    errorMessages = ErrorMessages;
}
