import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(apollo: Apollo) {
    apollo
      .query({
        query: gql `{
        business(id: "garaje-san-francisco") {
            name
            id
            alias
            rating
            url
        }
    }`
      })
       .subscribe(console.log);
   }

  ngOnInit() {
  }

}
