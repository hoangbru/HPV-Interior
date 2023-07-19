import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IColor } from 'src/app/interfaces/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss'],
  providers: [MessageService],
})
export class ColorListComponent {
 

  colorDialog: boolean = false;

  deletecolorDialog: boolean = false;

  deletecolorsDialog: boolean = false;

  categories: IColor[] = [];

  color: IColor = {};
  colorId: any;

  selectedCategories: IColor[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private ColorService: ColorService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.ColorService
      .getAllColor()
      .subscribe((data) => (this.categories = data));
  }

  openNew() {
    this.color = {};
    this.submitted = false;
    this.colorDialog = true;
  }

  deleteSelectedProducts() {
    this.deletecolorsDialog = true;
    console.log(this.color);
  }

  deleteProduct(ids: number, color: IColor) {
    this.deletecolorDialog = true;
    this.colorId = { ...color };
  }

  confirmDeleteSelected() {
    this.deletecolorsDialog = false;
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
    this.ColorService.removeColor(this.colorId._id).subscribe(() => {
      this.categories = this.categories.filter(
        (val) => val._id !== this.colorId._id
      );
    });

    this.deletecolorDialog = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    });
    this.color = {};
  }

  hideDialog() {
    this.colorDialog = false;
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
