import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeImagesService } from 'src/app/sharepage/service/images/home-images.service';
import { CartService } from 'src/app/sharepage/service/cart.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {
  image!: Product;
  constructor(private activatedRoute: ActivatedRoute, private homeimageService: HomeImagesService, 
    private cartservice: CartService,private router:Router) {

      activatedRoute.params.subscribe((params) => {
        if (params['id'])
          this.image = homeimageService.getProductById(params['id'])
      })

  }
  
  ngOnInit(): void {
  //   console.log(this.image);
  //  this.activatedRoute.params.subscribe((params => {
  //     console.log(params);
  //     if (params['id'])
  //       this.image = this.homeimageService.getProductById(params['id']);
  //   })); 

  }

  addToCart() {
    this.cartservice.addToCart(this.image);
    this.router.navigateByUrl('/cartpage');
  
  }

  
}
