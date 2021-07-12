import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FakeApiService } from "./fakeapi.service";
import { IFakeapiPosts } from "./fakeapiPosts";

@Component({
    selector: "pm-fakeapi",
    templateUrl: "./fakeapi.component.html",
    styleUrls: ["./fakeapi.component.css"]
})
export class FakeApiComponent implements OnInit, OnDestroy{    
    title: string = "FAKE API TESTE";
    fakeapiServiceSub!: Subscription;
    postsArray: IFakeapiPosts[] = [];

    constructor( private fakeapiService : FakeApiService) {}

    ngOnInit(): void {
        this.fakeapiServiceSub = this.fakeapiService.getFakeApiPosts().subscribe({
            next: data => {
                this.postsArray = data;
                console.log(this.postsArray);
            }
        })
    }

    ngOnDestroy(): void {
        this.fakeapiServiceSub.unsubscribe();
    }
}