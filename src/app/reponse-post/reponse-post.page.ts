import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reponse-post',
  templateUrl: './reponse-post.page.html',
  styleUrls: ['./reponse-post.page.scss'],
})
export class ReponsePostPage implements OnInit {


  isLike: boolean = false;
  isLike2: boolean = false;
  btnCommentClicked: boolean = false;
  divAnswerContent: boolean = false;
  btnShowAnswerClicked: boolean = false;

  imgSrc = "assets/icon/like.png";
  answerContent: string;
  constructor(public route: ActivatedRoute, public router: Router) { }


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
  showCommentModal() {
    this.btnCommentClicked = !this.btnCommentClicked;
  }

  showAnswer() {
    this.btnCommentClicked = false;
    this.btnShowAnswerClicked = false;
    this.divAnswerContent = true;
    console.log(this.answerContent);
  }

  showComment() {
    this.btnShowAnswerClicked = false;
    this.btnCommentClicked = false;
  }

  showAnswerModal() {
    this.btnShowAnswerClicked = !this.btnShowAnswerClicked;
  }


}
