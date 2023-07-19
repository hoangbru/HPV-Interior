import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ISize } from 'src/app/interfaces/size';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrls: ['./size-list.component.scss'],
  providers: [MessageService],
})
export class SizeListComponent {


  sizeDialog: boolean = false;

  deletesizeDialog: boolean = false;

  deletesizesDialog: boolean = false;

  categories: ISize[] = [];

  size: ISize = {};
  sizeId: any;

  selectedCategories: ISize[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private SizeService: SizeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.SizeService
      .getAllSize()
      .subscribe((data) => (this.categories = data));
  }

  openNew() {
    this.size = {};
    this.submitted = false;
    this.sizeDialog = true;
  }

  deleteSelectedProducts() {
    this.deletesizesDialog = true;
    console.log(this.size);
  }

  deleteProduct(ids: number, size: ISize) {
    this.deletesizeDialog = true;
    this.sizeId = { ...size };
  }

  confirmDeleteSelected() {
    this.deletesizesDialog = false;
    this.categories = this.categories.filter(
      (val) => !this.selectedCategories.includes(val)
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Products Deleted',
      life: 3000,
    });
    this.selectedCategories = [];
  }

  confirmDelete() {
    this.SizeService.removeSize(this.sizeId._id).subscribe(() => {
      this.categories = this.categories.filter(
        (val) => val._id !== this.sizeId._id
      );
    });

    this.deletesizeDialog = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    });
    this.size = {};
  }

  hideDialog() {
    this.sizeDialog = false;
    this.submitted = false;
  }

  findIndexById(id: any): number {
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
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
