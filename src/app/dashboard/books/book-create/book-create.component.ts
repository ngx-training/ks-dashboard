import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from 'src/app/services/authors/author';
import { AuthorService } from 'src/app/services/authors/author.service';
import { BookCategory } from 'src/app/services/book-categories/book-category';
import { BookCategoryService } from 'src/app/services/book-categories/book-category.service';
import { Book } from 'src/app/services/books/book';
import { BookService } from 'src/app/services/books/book.service';
import { Genre } from 'src/app/services/genres/genre';
import { GenreService } from 'src/app/services/genres/genre.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  createForm!: FormGroup;
  bookId!: string;
  mode!: string;

  genres$!: Observable<Genre[]>
  authors$!: Observable<Author[]>;
  bookCategories$!: Observable<BookCategory[]>;

  fullWidth: any = { 'width': '100%' };
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private genreService: GenreService,
    private authorService: AuthorService,
    private bookCategoryService: BookCategoryService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const { mode } = queryParams;
      this.mode = mode;
    });
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params['id'];
    });
  }

  ngOnInit(): void {
    this.createForm = this.buildForm();

    if (this.mode === 'edit') {
      this.bookService.getById(this.bookId).subscribe(book => {
        this.createForm.patchValue(book);
      });
    }

    this.genres$ = this.genreService.getAll();
    this.authors$ = this.authorService.getAll();
    this.bookCategories$ = this.bookCategoryService.getAll();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: ['Default title', [Validators.required]],
      description: ['Default description', [Validators.required, Validators.minLength(50)]],
      publishDate: [null],
      price: [0.0],
      isAvailable: [true],
      authors: [],
      genres: [],
      book_categories: []
    });
  }

  saveOrUpdate(): void {
    const book: Book = this.createForm.value;
    this.isLoading = true;
    if (this.mode === 'edit') {
      this.bookService.update(this.bookId, book).subscribe(
        res => {
          this.isLoading = false;
          this.router.navigate(['dashboard', 'books']);
        }, 
        error => {
          this.isLoading = false;
          console.error(error);
        });
    } else {
      this.bookService.create(book).subscribe(
        res => {
          this.isLoading = false;
          this.router.navigate(['dashboard', 'books']);
        },
        error => {
          this.isLoading = false;
          console.error(error);
        });
    }
  }

}
