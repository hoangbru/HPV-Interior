import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
  items!: MenuItem[];
  user: any;

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    private router: Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }

    this.items = [
      {
        label: 'Infomation',
        items: [
          {
            label: `${this.user.user.username}`,
            icon: 'pi pi-user',
            url: '',
          },
          {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off',
            command: () => this.logout()
          },
        ],
      },
    ];
  }
  logout() {
    // Xóa dữ liệu người dùng từ localStorage
    localStorage.removeItem('user');
    
    // Đặt lại giá trị của biến người dùng
    this.user = null;
    location.href = "/"
  }
}
