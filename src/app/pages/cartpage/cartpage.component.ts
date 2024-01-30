import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/Cartitem';
import { CartService } from 'src/app/sharepage/service/cart.service';
import { HomeImagesService } from 'src/app/sharepage/service/images/home-images.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
cart!:Cart;
constructor(private cartservice:CartService){
  
  this.setCart();
}

  ngOnInit(): void {
    
  }
  removeFromCart(cartItem:CartItem){
this.cartservice.removeFromCart(cartItem.image.id);
console.log(cartItem.image);

this.setCart()
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.image.id ,quantity);
    this.setCart();

  }
  setCart(){
    this.cart=this.cartservice.getCart();
    
  }

}
