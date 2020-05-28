import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string;
  constructor(private route: ActivatedRoute) {

  }
  // function that uses data from modal login page that is used to display the username
  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('userName');
  }

}

