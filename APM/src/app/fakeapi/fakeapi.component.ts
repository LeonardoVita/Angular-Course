import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FakeApiService } from "./fakeapi.service";
import { IFakeapiAirlines } from "./fakeapiAirlines";

@Component({
    templateUrl: "./fakeapi.component.html",
    styleUrls: ["./fakeapi.component.css"]
})
export class FakeApiComponent implements OnInit, OnDestroy{    
    title: string = "FAKE API TESTE";
    fakeapiServiceSub!: Subscription;
    airlinesArray: IFakeapiAirlines[] = [];

    constructor( private fakeapiService : FakeApiService) {}

    ngOnInit(): void {
        this.fakeapiServiceSub = this.fakeapiService.getFakeApiPosts().subscribe({
            next: data => {
                this.airlinesArray = data;
                console.log(this.airlinesArray);
            }
        })
    }

    ngOnDestroy(): void {
        this.fakeapiServiceSub.unsubscribe();
    }
}