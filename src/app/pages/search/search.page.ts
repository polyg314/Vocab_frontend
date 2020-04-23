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
  constructor(private router: Router, private http: HttpClient) { 


    
  }
  ngOnInit() {
  }
  results: Promise<any>;
  //results: Promise<any>;
  searchTerm: string
  current_search: boolean = false;
  definitions_one: Array<string> = [];
  definitions_two: Array<string> = [];
  definitions_three: Array<string> = [];
  desc_definitions_one: string
  desc_definitions_two: string
  desc_definitions_three: string

  search(this){
    this.definitions_one = []
    this.definitions_two = [];
    this.definitions_three = [];
    this.desc_definitions_one = '';
    this.desc_definitions_two = '';
    this.desc_definitions_three = '';
    this.current_search = true
    this.searchTerm = this.searchQuery;
    var api_key = '16ae4026-d367-49ba-a295-db9a200ef47c';
    var word_id = this.searchQuery;
    var url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word_id + '?key=' + api_key; 
    return this.results = this.http.get(url).subscribe((data: Response) => {
      console.log(data);
      this.definitions_one = data[0]['shortdef']
      this.desc_definitions_one = data[0]['fl']
      if(data[1]['shortdef'].length > 0){
        this.definitions_two = data[1]['shortdef']
        this.desc_definitions_two = data[1]['fl']
      }
      if(data[2]['shortdef'].length > 0){
        this.definitions_three = data[2]['shortdef']
        this.desc_definitions_three = data[2]['fl']
      }
      // for (let i = 1; i < 5; i++) {
      //   console.log(data[i]['shortdef'])
      //   console.log(data[i]['shortdef'].length)
      //   if(data[i]['shortdef'].length > 0){
      //     this.definitions.push(data[i])
      //   }
      // }
    });
  }
  
res(this){
  console.log(this.definitions_one)
}




}
