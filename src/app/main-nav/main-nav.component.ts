import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  showAbout() {
    this.toastService.showToast('success', 5000, 'This application was created by Harinder Gill (c).');
  }

  logout() {
    localStorage.setItem('user', JSON.stringify({}));
    this.router.navigate(['login']);
  }

}

