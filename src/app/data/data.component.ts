import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from './types';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

const searchQuery = gql`
          query searchQuery($term: String!){
            graphQLHub
            twitter {
              search(q: $term, count: 10, result_type: mixed) {
                user {
                  screen_name
                }
                id
                text
              }
            }
          }
      `;
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
    const querySubscription = this.apollo.watchQuery({
      query: searchQuery,
      variables: {
        term: this.searchText
      },
    }).valueChanges.subscribe((response) => {
      this.tweets = response.data['twitter'].search;
    });

    this.subscriptions = [...this.subscriptions, querySubscription];
  }
  constructor(private apollo: Apollo) {
   }

  ngOnInit() {

  }
}


