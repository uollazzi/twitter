import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {
  constructor(public ts: TweetsService) { }

  ngOnInit(): void {

  }
}
