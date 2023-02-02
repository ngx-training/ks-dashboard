import { MenuItem } from "primeng/api";

export const menuItems: MenuItem[] = [
    {
        label: 'Dashboard',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-th-large',
                routerLink: '/dashboard'
            }
        ]
    },
    {
        label: 'Books',
        items: [
            {
                label: 'Overview',
                icon: 'pi pi-book',
                routerLink: 'books'
            },
            {
                label: 'Create',
                icon: 'pi pi-plus-circle',
                routerLink: 'books/create'
            }
        ]
    }
]