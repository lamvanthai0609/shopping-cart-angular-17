import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TestApiService {
    apiURL: string = 'https://qly.cammattroi.com/api/landingpage/news/index';
    constructor(private http: HttpClient) {}

    getUsers(): Observable<unknown> {
        return this.http.get(this.apiURL, { headers: { 'Content-Type': 'application/json' } });
    }
}
