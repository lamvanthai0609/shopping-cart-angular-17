import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { InputComponent } from '@/components/interaction';
import { ErrorMessages } from '@/util/validation';

interface IUserInfo {
    username: FormControl<string | null>;
    password: FormControl<string | null>;
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup<IUserInfo>;
    errorMessages = ErrorMessages;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: this.formBuilder.control('', [Validators.required]),
            password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
        });
    }
    handleSubmit() {
        console.log('infoPayload', this.loginForm.value);
        this.router.navigate(['/']);
    }
}
