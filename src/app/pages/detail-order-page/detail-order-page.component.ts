import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-order-page',
  templateUrl: './detail-order-page.component.html',
  styleUrls: ['./detail-order-page.component.scss']
})
export class DetailOrderPageComponent {
  detailOrder: any = []
  idUser: string = this.AuthService.getID()
  constructor(
    private orderService: OrderService,
    private AuthService: AuthService
  ) {
    this.orderService.getOrderByIdUser(this.idUser).subscribe(data => {
      this.detailOrder = data
      console.log(this.detailOrder)
    })
  }

  huyDon(id: any, status: any) {
    const statusUpdate ="64866021d9b72638e8cad038"
    Swal.fire({
      title: 'Huy hang ?',
      text: "Ban that su khong muon mua nhung cai do cute nay ?!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Xóa sản phẩm
        this.orderService.editOrder({ _id: id, status: statusUpdate}).subscribe((data:any) => {
          console.log(data) 
        })
        this.orderService.getAllOrder()
        location.href="/detailorder"
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Hiển thị thông báo hủy xóa sản phẩm
        Swal.fire(
          'Cancelled',
          'Your order is safe :)',
          'error'
        )
      }
    })
  }
}