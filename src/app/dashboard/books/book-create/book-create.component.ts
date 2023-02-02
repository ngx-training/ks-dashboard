import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  createForm!: FormGroup;

  ngOnInit(): void {
    this.createForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      title: new FormControl('Default title', [Validators.required]),
      description: new FormControl('Default description', [Validators.required, Validators.minLength(50)]),
      author: new FormControl(null, [Validators.required]),
      genre: new FormControl(null),
      publish_date: new FormControl(null),
      price: new FormControl(0.0),
      isAvailable: new FormControl(true)
    });
  }

}
