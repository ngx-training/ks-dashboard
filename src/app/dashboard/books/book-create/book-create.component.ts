import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  createForm!: FormGroup;
  bookId!: string;

  fullWidth: any = { 'width': '100%' };

  constructor(
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params['id'];
    });
  }

  ngOnInit(): void {
    this.createForm = this.buildForm();

    this.bookService.getById(this.bookId).subscribe(book => {
      this.createForm.patchValue(book);
    });
  
    // Hier müssen die Werte für alle FormControl gestzt werden
    // this.createForm.setValue(oldBookd);

    // Hier werden die Werte partiell gesetzt.
    // this.createForm.patchValue(oldBookd);
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: ['Default title', [Validators.required]],
      description: ['Default description', [Validators.required, Validators.minLength(50)]],
      publishDate: [null],
      price: [0.0],
      isAvailable: [true],
      author: this.formBuilder.array([]),
      genre: this.formBuilder.array([]),
      book_categories: this.formBuilder.array([])
    });
  }

  get categoreis(): FormArray {
    return this.createForm.get('categories') as FormArray;
  }

  addCategory() {
    this.categoreis.push(this.formBuilder.group({name: ['test']}));
  }

  removeCategory(index: number): void {
    this.categoreis.removeAt(index);
  }

}
