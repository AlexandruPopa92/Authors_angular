import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor = { name: "" };
  error:any;
  constructor(private _httpService: HttpService,private _router: Router) { }

  ngOnInit() {
  }
  AddAuthor(){
    let add_author = this._httpService.addNewTask(this.newAuthor);
    add_author.subscribe(data => {
      if (data['error']) {
        console.log("Got errors", data["error"].errors); 
        this.error = data["error"].errors;
      } else {        
        this._router.navigate(['/']);     
      }
    })
  }
}
