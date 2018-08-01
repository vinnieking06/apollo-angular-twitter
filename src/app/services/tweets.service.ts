import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of, Subscription } from 'rxjs';
import { searchQuery } from './gql';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  watchQuerySearchTweets(searchText: string) {
    return this.apollo.watchQuery({
      query: searchQuery,
      variables: {
        term: searchText
      },
    });
  }
  constructor(private apollo: Apollo) { }
}
