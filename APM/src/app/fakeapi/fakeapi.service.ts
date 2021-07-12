import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IFakeapiPosts } from "./fakeapiPosts";

@Injectable({
    providedIn: "root"
})
export class FakeApiService {

    private fakeApiUrl = "http://fakeapi.jsonparseronline.com"

    constructor(private http: HttpClient) {}

    getFakeApiPosts(): Observable<IFakeapiPosts[]>{
        return this.http.get<IFakeapiPosts[]>(`${this.fakeApiUrl}/posts`)
    }
}