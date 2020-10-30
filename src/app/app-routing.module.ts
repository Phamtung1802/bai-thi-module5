import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookModule } from './book/book.module';

const routes: Routes = [
  { path: 'books', loadChildren:() => import('./book/book.module').then(m=>m.BookModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
