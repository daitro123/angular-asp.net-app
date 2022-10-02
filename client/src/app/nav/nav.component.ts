import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) {}

  login(): void {
    this.accountService.login(this.model).subscribe((response) => {
      console.log(response);
      this.loggedIn = true;
    });
  }

  logout() {
    this.loggedIn = false;
  }

  ngOnInit(): void {}
}
