import { Component } from '@angular/core';
import { IOrder } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-canceled-order',
  templateUrl: './canceled-order.component.html',
  styleUrls: ['./canceled-order.component.scss']
})
export class CanceledOrderComponent {
  constructor (
    private orderService:OrderService
    ){
   }
  muaLai(){
  }
}
