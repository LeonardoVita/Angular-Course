import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IFakeapiAirlines } from "./fakeapiAirlines";

@Injectable({
    providedIn: "root"
})
export class FakeApiService {

    private fakeApiUrl = "https://api.instantwebtools.net/v1"

    constructor(private http: HttpClient) {}

    getFakeApiPosts(): Observable<IFakeapiAirlines[]>{
        return this.http.get<IFakeapiAirlines[]>(`${this.fakeApiUrl}/airlines`)
    }
}