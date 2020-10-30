import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from 'src/app/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList:Book[];
  currentBook:Book;
  addForm: any;
  editForm: any;
  id:number=null;
  private apiURL = 'http://localhost:3000/books'



  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.addForm = this.formBuilder.group({
      title: [""],
      author:[""],
      description:[""],
    });
    this.editForm = this.formBuilder.group({
      title: [""],
      author:[""],
      description:[""],
    });

  }

  public get(url: string): Observable<any>{
    return this.http.get<any>(url);
  }
  public post(url: string): Observable<any>{
    return this.http.post<any>(url,this.addForm.value);
  }
  public delete(url: string): Observable<any>{
    return this.http.delete<any>(url);
  }
  public put(url:string): Observable<any>{
    return this.http.put<any>(url, this.editForm.value);
  }





  ngOnInit(): void {
    console.log("constructing");
    this.get(this.apiURL).subscribe((values)=> {
      this.bookList=values;
    });
  }

  addBook():void{
    console.log("submitting")
    console.log(this.addForm)
    this.post("http://localhost:3000/books").subscribe(
      (value => console.log('add book success' + value))
    )
  }

  deleteBook(id:String):void{
    console.log("deleting");
    this.delete("http://localhost:3000/books/"+id).subscribe(
      (value => console.log('delete book success' + value))
    )
  }

  updateBook(id:String):void{
    console.log("updating");
    console.log(this.editForm);
    this.put("http://localhost:3000/books/"+id).subscribe(
      (value => console.log('delete book success' + value))
    )
  }
}
