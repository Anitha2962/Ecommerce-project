import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/shared/models/Cartitem';
import { Product } from 'src/app/shared/models/product';
import { Cart } from 'src/app/shared/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart:Cart = new Cart();
  constructor() { }
  addToCart(image:Product):void{
    let cartItem = this.cart.items.find(item => item.image.id === image.id);
    console.log(this.cart.items);
    
    
    if(cartItem){
      this.changeQuantity(image.id, cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartItem(image));
    
  }
  removeFromCart(imageId:number):void{
    this.cart.items=
    this.cart.items.filter(item =>item.image.id !=imageId);
  }
  changeQuantity(imageId:number , quantity:number){
    let cartitem = this.cart.items.find(item => item.image.id ===imageId)
    if(!cartitem)return
    cartitem.quantity=quantity;
  }
  getCart():Cart{
   return this.cart;
}
}
