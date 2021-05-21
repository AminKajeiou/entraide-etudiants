import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.page.html',
  styleUrls: ['./reponse.page.scss'],
})
export class ReponsePage implements OnInit {

  isLike: boolean = false;
  isLike2: boolean = false;
  btnCommentClicked: boolean = false;
  imgSrc = "assets/icon/like.png";
  constructor(public popoverController: PopoverController, public route: ActivatedRoute, public router: Router) { }


  redirect() {

    this.router.navigate(['/notification/']);

  }

  redirectMessagerie() {

    this.router.navigate(['/messagerie/']);

  }

  ngOnInit() {
  }

  setLike() {
    this.isLike = !this.isLike;
    if (this.isLike) {
      this.imgSrc = "assets/icon/like_fill.png";

    } else {
      this.imgSrc = "assets/icon/like.png";
    }
  }
  setLike2() {
    this.isLike2 = !this.isLike2;
    if (this.isLike2) {
      this.imgSrc = "assets/icon/like_fill.png";

    } else {
      this.imgSrc = "assets/icon/like.png";
    }
  }


  showModal() {
    this.btnCommentClicked = !this.btnCommentClicked;

  }

  hodeModal() {
    this.btnCommentClicked = false;

  }


}

