import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {  
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription

  private _listFilter: string= "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){    
    this._listFilter = value;
    console.log("In Setter:", value);
    this.filteredProducts = this.performFilter(value);
  }

  constructor(private productService: ProductService){ }  

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;     
  }

  ResetFilterInput(): void{
    this.listFilter = "";    
  }
  
  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLowerCase();

    return this.products.filter((product: IProduct)=> 
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  onNotify(message: string): void {
    this.pageTitle = message;
  }
} 