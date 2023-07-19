import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent {
  constructor(
    private CartService:CartService
   
  ){
    this.carts= this.CartService.getCart()
  }
  // danh sách cart
  carts:any =[]
  // tổng số lượng
  totalQuantity:number = this.CartService.getCartQuatity()
  // tổng số lượng sản phẩm
  totalPrice:number = this.CartService.getCartPrice()


    


  subtotal(cart:any) {
    return cart.quantity * cart.price
  }
  updateQuantity(index:number, event:any){
    let newQuantity = event.target.value;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    event.target.value = newQuantity 
    this.carts[index].quantity= event.target.value
    this.CartService.saveCart(this.carts)

    this.totalQuantity = this.CartService.getCartQuatity()
    this.totalPrice= this.CartService.getCartPrice()
  }

  giam(idex :number, quaty: any ){
    let newQuantity = parseInt(quaty) - 1;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    this.carts[idex].quantity = newQuantity;
    this.CartService.saveCart(this.carts)

    this.totalQuantity = this.CartService.getCartQuatity()
    this.totalPrice= this.CartService.getCartPrice()
  }
  tang(idex :number, quaty: any ){
    let newQuantity = parseInt(quaty) + 1;
    newQuantity = newQuantity <= 100 ? newQuantity : 100;
    this.carts[idex].quantity = newQuantity;
    this.CartService.saveCart(this.carts)

    this.totalQuantity = this.CartService.getCartQuatity()
    this.totalPrice= this.CartService.getCartPrice()
  }
  removeCart(index:number){
    const confirm = window.confirm("Are you sure you want to delete ")
   if(confirm){
    this.carts.splice(index,1)
    this.CartService.saveCart(this.carts)

    this.totalQuantity = this.CartService.getCartQuatity()
    this.totalPrice= this.CartService.getCartPrice()
   }
  }

  removeCartAll(){   
  const confirm = window.confirm("Are you sure you want to delete ")
   if(confirm){
    sessionStorage.clear()
    this.carts=[]
   }
  }
}
