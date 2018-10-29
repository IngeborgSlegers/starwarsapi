import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service'
import { Result } from '../result';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  // hero = 'windstorm'
  results: Result[];

  displayResults: FormGroup

  constructor(private starwarsService: StarwarsService, private fb: FormBuilder) { }

  ngOnInit() {
    // this.getResults();
    this.displayResults = this.fb.group({
      choose: new FormControl(''),
      search: new FormControl('')
    })
  }

  getInfo(): void {
    this.starwarsService.getResults(this.displayResults.value.choose, this.displayResults.value.search).subscribe(results => this.results = results);
    console.log(this.results);
  }
}