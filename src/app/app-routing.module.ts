import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AppLayoutComponent } from './layout/admin-layout/app.layout.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AdminProductListComponent } from './pages/admin/product/admin-product-list/admin-product-list.component';
import { AdminProductEditComponent } from './pages/admin/product/admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './pages/admin/product/admin-product-add/admin-product-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CheckoutComponent } from './component/client/checkout/checkout.component';
import { CartDetailComponent } from './component/client/cart-detail/cart-detail.component';

import { AdminCategoryListComponent } from './pages/admin/category/admin-category-list/admin-category-list.component';
import { AdminCategoryAddComponent } from './pages/admin/category/admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './pages/admin/category/admin-category-edit/admin-category-edit.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';

import { AdminGuard } from './services/admin.guard';

import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { AboutContentComponent } from './component/about/about-content/about-content.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DetailOrderPageComponent } from './pages/detail-order-page/detail-order-page.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { CanceledOrderComponent } from './pages/canceled-order/canceled-order.component';
import { OrderListComponent } from './pages/admin/order/order-list/order-list.component';
import { OrderUpdateComponent } from './pages/admin/order/order-update/order-update.component';
import { AdminUserListComponent } from './pages/admin/user/admin-user-list/admin-user-list.component';
import { AdminUserEditComponent } from './pages/admin/user/admin-user-edit/admin-user-edit.component';
import { EditInfoComponent } from './component/client/edit-info/edit-info.component';
import { ColorListComponent } from './pages/admin/attributes/color/color-list/color-list.component';
import { ColorEditComponent } from './pages/admin/attributes/color/color-edit/color-edit.component';
import { ColorAddComponent } from './pages/admin/attributes/color/color-add/color-add.component';
import { SizeListComponent } from './pages/admin/attributes/size/size-list/size-list.component';
import { SizeEditComponent } from './pages/admin/attributes/size/size-edit/size-edit.component';
import { SizeAddComponent } from './pages/admin/attributes/size/size-add/size-add.component';
import { CommentComponent } from './pages/admin/comment/comment.component';


const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children:[
    {path: "", component: HomePageComponent},
    {path: "shop", component: ShopPageComponent},
    {path: "shop/detail/:slug", component: DetailProductPageComponent},
    {path: "blog", component: BlogPageComponent},
    {path: "about", component: AboutContentComponent},
    {path: "contact", component: ContactPageComponent},
    {path: "checkout", component: CheckoutComponent},
    {path: "info/edit", component: EditInfoComponent},
    {path: "detailorder", component: DetailOrderPageComponent},
    {path: "cart", component: CartDetailComponent},
    {path: "order/canceled", component: CanceledOrderComponent},
   
  ]},
  

  {path: "admin", component: AppLayoutComponent, canActivate: [AdminGuard] ,
  children:[
    {path: "", redirectTo:"dashboard",pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent},

    // products 
    {path: "product", component: AdminProductListComponent},
    {path:"product/:id/edit",component:AdminProductEditComponent},
    {path:"product/add",component:AdminProductAddComponent},
    //category
    {path: "category", component: AdminCategoryListComponent},
    {path:"category/:id/edit",component:AdminCategoryEditComponent},
    {path:"category/add",component:AdminCategoryAddComponent},

    // color
    {path: "color", component: ColorListComponent},
    {path:"color/:id/edit",component:ColorEditComponent},
    {path:"color/add",component:ColorAddComponent},
    //sixe
    {path: "size", component: SizeListComponent},
    {path:"size/:id/edit",component:SizeEditComponent},
    {path:"size/add",component:SizeAddComponent},
    //user

    //order
    {path: "order", component: OrderListComponent},
    {path: "order/:id/edit", component: OrderUpdateComponent},

    //Comments
    {path: "comment", component: CommentComponent},

    {path:"user",component:AdminUserListComponent}
  ]},


  {path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
