import { Routes } from '@angular/router';
import { SignUpComponent } from '@/page/auth/sign-up/sign-up.component';
import { HomeComponent } from '@/page/home/home.component';
import { ProductComponent } from '@/page/product/product.component';
import { LoginComponent } from '@/page/auth/login/login.component';
import { Page404Component } from '@/page/maintenance/404/404.component';
import { CartComponent } from '@/page/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: SignUpComponent,
            },
        ],
    },
    {
        path: 'product/:id',
        component: ProductComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: '**',
        component: Page404Component,
    },
];
