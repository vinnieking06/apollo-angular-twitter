import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(apollo: Apollo, private http: HttpClient) {
    apollo
      .query({
        query: gql`
          {
            graphQLHub
            twitter {
              user (identifier: name, identity: "Tallwave") {
                created_at
                description
                id
                screen_name
                name
                profile_image_url
                url
                tweets_count
                followers_count
                tweets(limit: 1) {
                  text
                }
              }
              tweet(id: "687433440774459392") {
                text,
                retweets(limit: 2) {
                  id,
                  retweeted_status {
                    id
                  }
                  user {
                    screen_name
                  }
                }
              }
              search(q: "facebook", count: 1, result_type: mixed) {
                user {
                  screen_name
                }
                id
                text
              }
            }
          }
        `,
      })
      .subscribe(console.log);
   }

  ngOnInit() {
  }
}
