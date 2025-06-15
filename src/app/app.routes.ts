import { Routes } from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {HomeComponent} from './home/home-component';

export const routes: Routes = [
  {
    path: '', // пустой путь (корневой URL)
    component: HomeComponent // будет отображаться на главной странице
  },
  {
    path: 'users', // путь /users
    component: UsersListComponent // будет отображаться при переходе на /users
  }
];
