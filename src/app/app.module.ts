import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule} from 'apollo-angular';
import {HttpLinkModule} from 'apollo-angular-link-http';
import { setContext } from 'apollo-link-context';


import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'https://www.graphqlhub.com/graphql'}),
      cache: new InMemoryCache(),
    });
    // const http = httpLink.create({uri: 'https://api.yelp.com/v3/graphql', withCredentials: true });

    // const auth = setContext((_, { headers }) => {
    //   // get the authentication token from local storage if it exists
    //   const token = `6-ElaghQB3p3tVB2jHqkusagt7opUJnC2HamPrsp2QBG3AUDYPYuGS1xzP6xu2J7Hka2ge4Ab1sHluTpFEgRWkjOMlcZ_YtLUBCoIbDAEfhASTkQkdbwbrrXLRlZW3Yx`;
    //   // return the headers to the context so httpLink can read them
    //   // in this example we assume headers property exists
    //   // and it is an instance of HttpHeaders
    //   if (!token) {
    //     return {};
    //   } else {
    //     return {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     };
    //   }
    // });

    // apollo.create({
    //   link: auth.concat(http),
    //   cache: new InMemoryCache(),
    // });
  }
 }
