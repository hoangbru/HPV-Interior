import { StatusService } from './../../../../services/status.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IOrder } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStatus } from 'src/app/interfaces/status';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent {
  selectedState: any = null;
  order!:any
  orderForm = this.formBuilder.group({
    status: ["",[Validators.required]],
  })
  statusList: IStatus[] = []

  constructor(
    private StatusService: StatusService,
    private OrderService:OrderService,
    private formBuilder : FormBuilder,
    private redirect: Router,
    private route: ActivatedRoute,
  ){
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.OrderService.getOrderById(id).subscribe((data:any) => {
        console.log(data.status)
        this.order = data;
        this.orderForm.patchValue({
          status: data.status,
        });
      });
    });

    this.StatusService.getAllStatus().subscribe(data => this.statusList = data)

  }
  
  
  onHandleSubmit(){
    if(this.orderForm.valid){
      const order: IOrder ={    
        _id:this.order._id,
        status:this.orderForm.value.status || "",
      }
      console.log(order)
      this.OrderService.editOrder(order).subscribe(data => {
        console.log(data);
        alert("Sửa thành công")
        this.redirect.navigate(["/admin/order"])      
      })
    }
  }
}
