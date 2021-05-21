import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.page.html',
  styleUrls: ['./user-posts.page.scss'],
})
export class UserPostsPage implements OnInit {


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
