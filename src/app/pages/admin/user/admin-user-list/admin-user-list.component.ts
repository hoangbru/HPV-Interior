import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss'],
  providers: [MessageService]
})
export class AdminUserListComponent {


    authID:any
  categoryDialog: boolean = false;

  deleteCategoryDialog: boolean = false;

  deleteCategorysDialog: boolean = false;

  categories: IUser[] = [];

  category: any = {};


  selectedCategories: IUser[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private AuthService: AuthService, private messageService: MessageService) { 
    this.AuthService.getAllUsers().subscribe(data =>{
      this.categories = data
    }); 
  }

  
  openNew() {
      this.category = {};
      this.submitted = false;
      this.categoryDialog = true;
  }

  deleteSelectedProducts() {
      this.deleteCategorysDialog = true;
     
  }


  deleteProduct(ids :number,category: IUser  ) {
      this.deleteCategoryDialog = true;
      this.authID = { ...category };
   
      
  }


  confirmDeleteSelected() {
      this.deleteCategorysDialog = false;
      this.categories = this.categories.filter(val => !this.selectedCategories.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      this.selectedCategories = [];
  }

  confirmDelete() {
      this.deleteCategoryDialog = false;
      this.AuthService.removetUsers(this.authID._id).subscribe(() =>{
        this.categories = this.categories.filter(val => val._id !== this.authID._id);
      })    
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      this.category = {};
  }

  hideDialog() {
      this.categoryDialog = false;
      this.submitted = false;
  }

  findIndexById(id: number): number {

      let index = -1;
      for (let i = 0; i < this.categories.length; i++) {
          if (this.categories[i]._id === id) {
              index = i;
              break;
          }
      }
      return index;
  }

  createId(): string {
      let id = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
