import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit() {
  }

  results: Promise<any>;


  //return this.http.get(this.heroesUrl, requestOptions)

  search(this){

    var api_key = '16ae4026-d367-49ba-a295-db9a200ef47c';
    var word_id = this.searchQuery;
    var url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word_id + '?key=' + api_key; 

    this.results = this.http.get(url);
    console.log(this.films)
    this.results.subscribe(data => {
      console.log('my data: ', data);
      console.log('my data: ', data[0]['shortdef']);
    });


    // console.log(this.searchQuery)
    // var base_url = 'https://od-api.oxforddictionaries.com/api/v2';
    // var app_id = '7b44a9b1';
    // var app_key = '99a87eee452cf676fb99b5fe801b50d5';
    // var endpoint = "entries";
    // var language_code = "en-us";
    // var word_id = this.searchQuery;
    // var url = "https://od-api.oxforddictionaries.com/api/v2/" + endpoint + "/" + language_code + "/" + word_id
    //console.log(requestOptions.headers)
    //r = requests.get(url, {headers: {"app_id": app_id, "app_key": app_key}})
    //this.results = this.http.get(url,requestOptions)

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': "*",
    //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'app_id': app_id,
    //     'app_key': app_key,
    //   })
    // };

    //let headers = new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*', 
    //     'Access-Control-Allow-Methods':'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Accept':'application/json',
    //     //'content-type':'application/json',
     //    'app_id': app_id, 
       //  'app_key': app_key,
    //     'Access-Control-Max-Age': '86400'
   // });
    //console.log(headers.get("Accept"))
    //console.log(headers)




    // this.films = this.http.get('https://swapi.co/api/films');
    // console.log(this.films)
    // this.films.subscribe(data => {
    //   console.log('my data: ', data);
    // });



    //this.results = this.http.get(url, httpOptions);
    //this.results.subscribe(data => {
     // console.log('my data: ', data);
    //});

    //console.log(this.results)
    // return this.http.get(this.heroesUrl, requestOptions)
    //console.log(results)
  }

  




}
