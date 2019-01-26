import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {
 id:any;
 one_author:any;
 newAuthor:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.one_author ={}
    this.newAuthor ={ name: "" };
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.showAuthor();
    
  }
  showAuthor() {
    let author = this._httpService.getOne(this.id);
    author.subscribe(data => {
      console.log("Got one task", data);
      this.one_author = data['task'];
    })
  }
  UpdateAuthor(id) {
    let toupdate = this._httpService.updateOne(id,this.one_author);
    toupdate.subscribe(data => {
      this._router.navigate(['/']);
    })
  }

}
