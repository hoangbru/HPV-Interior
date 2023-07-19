import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from 'src/app/services/cart.service';
import { IComment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-content-detail-product',
  templateUrl: './content-detail-product.component.html',
  styleUrls: ['./content-detail-product.component.scss']
})
export class ContentDetailProductComponent implements OnInit{
  product: any;
  user: any;
  idUserComment: any;
  quantitys?: number;
  countCMT: any;
  carts: any[] = this.CartService.getCart();
  comments: any;
  commentForm = this.formBuilder.group({
    idUser: ["", [Validators.required]],
    productId: ["", [Validators.required]],
    description: ["", [Validators.required]],
  })

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private CartService: CartService,
    private formBuilder: FormBuilder,
    private commentService: CommentService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('slug'));
      this.productService.getProductBySlug(id).subscribe(product => {
        this.product = product;
        console.log(product);
        
        const productId = String(this.product._id); // Lấy ID của sản phẩm từ đối tượng sản phẩm
        console.log(productId); // Kiểm tra giá trị productId
        this.commentForm.patchValue({
          idUser: this.commentForm.get('idUser')?.value,
          productId: productId
        });

        this.commentService.getcommentByIdProducts(productId).subscribe((comment: any) => {
          this.comments = comment.comments;
          this.countCMT = this.comments.length;
        });
      }, error => console.log(error.message));
    });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { user: { _id } } = JSON.parse(storedUser);
      const id = _id;
      // set idUser in formData
      this.commentForm.get('idUser')?.setValue(id);
      this.idUserComment = id
      console.log("comment?.idUser._id", this.idUserComment)
    }
}
  onAddCart(product: IProduct): any {

    let index = this.carts.findIndex((item) => {
      return item.id == product._id
    })
    if (index >= 0) {
      this.carts[index].quantity += 1
    } else {
      let cartItem: any = {
        id: product._id,
        name: product.name,
        img: product.thumbnail,
        price: product.price,
        quantity: this.quantitys || 1,
      }
      this.carts.push(cartItem)

    }

    this.CartService.saveCart(this.carts)
    alert("thêm vào giỏ hàng thành công")
  }

  resetForm() {
    this.commentForm.reset(); // Đặt lại giá trị của form về trạng thái ban đầu
  }

  addComment() {
    const productId = this.product._id; // Lấy ID sản phẩm từ thuộc tính _id của đối tượng product
    this.commentForm.patchValue({ productId: productId });
    const comment: IComment = {
      idUser: this.commentForm.value.idUser || "",
      productId: this.commentForm.value.productId || "",
      description: this.commentForm.value.description || ""
    }
    console.log(comment)
    this.commentService.addcomment(comment).subscribe(comment => {
      console.log(comment)
      this.route.paramMap.subscribe(params => {
        const productId = this.product._id;
        this.commentService.getcommentByIdProducts(productId).subscribe((comment: any) => {
          this.comments = comment.comments;
          this.countCMT = this.comments.length
        })
      });
      this.resetForm();
    })
  }

  onHandleRemove(id: string | any) {
    alert("Xoa binh luan thanh cong !")
    // Thực hiện xoá bình luận
    this.commentService.removeComment(id).subscribe(comment => {
      const newComment = this.comments.filter((cmt:any) => cmt._id != id);
      this.comments = newComment;
      this.countCMT = this.comments.length
    });
  }
  
}
