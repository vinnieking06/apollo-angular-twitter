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
              search(q: "facebook", count: 5, result_type: mixed) {
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
