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
            reddit {
              user(username: "kn0thing") {
                username
                commentKarma
                createdISO
              }
              subreddit(name: "movies"){
                newListings(limit: 2) {
                  title
                  comments {
                    body
                    author {
                      username
                      commentKarma
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .subscribe(console.log);
    // apollo
    //   .query({
    //     query: gql `{
    //     business(id: "garaje-san-francisco") {
    //         name
    //         id
    //         alias
    //         rating
    //         url
    //     }
    // }`
    //   })
    //    .subscribe(console.log);
   }

  ngOnInit() {
    this.http.get('https://api.publicapis.org/entries?category=animals&https=true').subscribe(heroes => {
      console.log('random API', heroes);
    });
  }
}
