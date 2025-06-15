import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

const consoleResponse = (response: unknown) => console.log(response);

@Component({
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss']
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient)
  constructor(private router: Router) {
    this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(consoleResponse)
  }


  navigateToAboutHome() {
    this.router.navigate(['/']);
  }
}
