import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';


const routes: Routes = [
  { path: '',
   children:[
      {
        path:'', component:BookListComponent
      },
      {
        path:'details/:id', component:BookDetailsComponent
      },
    ]

  }
];


@NgModule({
  declarations: [BookListComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[BookListComponent]
})

export class BookModule { }
