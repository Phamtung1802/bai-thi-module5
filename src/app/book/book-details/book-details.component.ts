import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private apiURL = 'http://localhost:3000/books/'

  bookView:Book;
  id:string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  public get(url: string): Observable<any>{
    return this.http.get<any>(url);
  }


  ngOnInit(): void {
    console.log("constructing");
    this.id = this.route.snapshot.paramMap.get("id");
    this.get(this.apiURL+this.id).subscribe((values)=> {
      this.bookView=values;
    });

  }


}
