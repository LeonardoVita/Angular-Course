import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail"
  product: IProduct | undefined;
  sub!: Subscription;  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.sub = this.productService.getProducts().subscribe({
      next: produtcs => {
        this.product = produtcs.find((item)=> item.productId == id)
      }
    });
  }

  onBack(): void{
    this.router.navigate(["/products"]);
  }
}
