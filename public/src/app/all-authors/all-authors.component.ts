import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  all_authors:any
  constructor(private _httpService: HttpService) {}  
  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors() {
    let all = this._httpService.getTasks();
    all.subscribe(data => {
      console.log("Got all authors", data)
      this.all_authors = data['task'];
    })
  }
  Delete(id){
    let author = this._httpService.deleteOne(id);
    author.subscribe(data => {
      this.getAllAuthors();      
    })
  }

}
