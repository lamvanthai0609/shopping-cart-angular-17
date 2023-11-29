import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '@/components/product-card/product-card.component';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './home.component.html',
})
export class HomeComponent {}
