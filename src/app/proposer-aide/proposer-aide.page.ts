import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proposer-aide',
  templateUrl: './proposer-aide.page.html',
  styleUrls: ['./proposer-aide.page.scss'],
})
export class ProposerAidePage implements OnInit {


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
