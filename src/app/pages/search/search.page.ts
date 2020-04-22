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

  definitions: Array<String>;
  searchTerm: String;

  search(this){

    var api_key = '16ae4026-d367-49ba-a295-db9a200ef47c';
    var word_id = this.searchQuery;
    var url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word_id + '?key=' + api_key; 

    this.results = this.http.get(url);
    this.searchTerm = this.searchQuery;
    //console.log(this.films)
    this.results.subscribe(data => {
      console.log('my data: ', data);
      console.log('my data: ', data[0]['shortdef']);
      this.defitions = data[0]['shortdef']
    });
  }

  




}
