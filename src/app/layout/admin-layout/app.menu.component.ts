import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin/dashboard'] }
                ]
            },
            {
                label: 'Control',
                items: [
                    {
                        label: 'Products', icon: 'pi pi-fw pi-database',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/product']},

                            {label: 'Add new', icon: 'pi pi-fw pi-plus', routerLink:['/admin/product/add']},

                        ]
                    },
                    {
                        label: 'Categories', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/category']},
                            {label: 'Add new', icon: 'pi pi-fw pi-plus', routerLink:['/admin/category/add']},
                        ]
                    },

                    {

                        label: 'Order', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/order']},
                        ]
                    },
                    {
                        label: 'Comment', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/comment']}
                        ]
                    },
                    {
                        label: 'User', icon: 'pi pi-fw pi-user',
                        items: [
                            {label: 'List', icon: 'pi pi-fw pi-table', routerLink:['/admin/user']}
                        ]
                    },
                    
                    {
                        label: 'Attributes',
                        icon: 'pi pi-fw pi-pencil',
                        items: [           
                            {
                                label: 'Color',
                                icon: 'pi pi-fw pi-sliders-h',
                                items: [
                                    {
                                        label: 'List Color',
                                        icon: 'pi pi-fw pi-table',
                                        routerLink: ['/admin/color']
                                    },
                                    {
                                        label: 'Add new color',
                                        icon: 'pi pi-fw pi-plus',
                                        routerLink: ['/admin/color/add']
                                    }
                                   
                                ]
                            },
                            {
                                label: 'Size',
                                icon: 'pi pi-fw pi-sliders-v',
                                items: [
                                    {
                                        label: 'List Size',
                                        icon: 'pi pi-fw pi-table',
                                        routerLink: ['/admin/size']
                                    },
                                    {
                                        label: 'Add Size',
                                        icon: 'pi pi-fw pi-plus',
                                        routerLink: ['/admin/size/add']
                                    }
                                   
                                ]
                            },
                        
                        ]
                    },
                    
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/admin']
                    },
                    {
                        label: 'View Source', icon: 'pi pi-fw pi-search', url: ['/admin'], target: '_blank'
                    }
                ]
            }
        ];
    }
}
