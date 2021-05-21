import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demander-aide',
  templateUrl: './demander-aide.page.html',
  styleUrls: ['./demander-aide.page.scss'],
})
export class DemanderAidePage implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router) { }

  redirect() {

    this.router.navigate(['/notification/']);

  }

  redirectMessagerie() {

    this.router.navigate(['/messagerie/']);

  }

  ngOnInit() {
  }
}
