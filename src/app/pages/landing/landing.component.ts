import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private router: Router) {}

  clickedStart(event: Event) {
    event.stopPropagation();
    this.router.navigateByUrl('/sign-up');
  }
}
