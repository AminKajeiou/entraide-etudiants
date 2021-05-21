import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

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
