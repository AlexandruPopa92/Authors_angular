import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { ShowAuthorComponent } from './show-author/show-author.component';

const routes: Routes = [
  { path: '',component: AllAuthorsComponent},
  { path: 'new',component: NewAuthorComponent },
  { path: 'edit/:id',component: ShowAuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
