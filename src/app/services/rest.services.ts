import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})

export class Rest {
    url = 'products/1';

    constructor(private http: HttpClient) {}
    
    getSample(){
        return this.http.get(this.url);
    }
}