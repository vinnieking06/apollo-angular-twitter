import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from './types';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  tweets: Tweet[] = [];
  searchText: string = '';
  subscriptions: Subscription[] = [];
  executeSearch() {
    if (!this.searchText) {
      return;
    }
    const querySubscription = this.tweetService.watchQuerySearchTweets(this.searchText)
      .valueChanges.subscribe((response) => {
        this.tweets = response.data['twitter'].search;
      });

    this.subscriptions = [...this.subscriptions, querySubscription];
  }
  constructor(private tweetService: TweetsService) {
   }

  ngOnInit() {

  }
}


