import { Product } from "./product";

export class CartItem{
    constructor (image:Product){
        this.image=image;
        
    }
    image!:Product;
    quantity:number = 1;

    get Price():number{
        return this.image.price * this.quantity;
       
    }
}