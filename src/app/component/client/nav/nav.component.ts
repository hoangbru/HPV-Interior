import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor (
    private cartService: CartService,
    private router: Router
    ){

  }
  user: any;
  buy: boolean = false;
  carts:any =[]
  totalQuantity:number = this.cartService.getCartQuatity()
  totalPrice:number = this.cartService.getCartPrice()

  ngOnInit():void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      
    }
    this.carts= this.cartService.getCart()
  }
  subtotal(cart:any) {
    return cart.quantity * cart.price
  }
  updateQuantity(index:number, event:any){
    let newQuantity = event.target.value;
    newQuantity = newQuantity > 0 ? newQuantity : 1;
    event.target.value = newQuantity 
    this.carts[index].quantity= event.target.value
    this.cartService.saveCart(this.carts)

    this.totalQuantity = this.cartService.getCartQuatity()
    this.totalPrice= this.cartService.getCartPrice()
  }

  removeCart(index:number){
    const confirm = window.confirm("Are you sure you want to delete ")
   if(confirm){
    this.carts.splice(index,1)
    this.cartService.saveCart(this.carts)

    this.totalQuantity = this.cartService.getCartQuatity()
    this.totalPrice= this.cartService.getCartPrice()
   }
  }

  removeCartAll(){   
  const confirm = window.confirm("Are you sure you want to delete ")
   if(confirm){
    sessionStorage.clear()
    this.carts=[]
   }
  }
  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/']);
    location.reload();
  }
}
