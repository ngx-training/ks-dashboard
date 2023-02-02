import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: ['Default title', [Validators.required]],
      description: ['Default description', [Validators.required, Validators.minLength(50)]],
      author: [null, [Validators.required]],
      genre: [null],
      publish_date: [null],
      price: [0.0],
      isAvailable: [true],
      unterGruppe: this.formBuilder.group({
        test: [null]
      }),
      categories: this.formBuilder.array([
        this.formBuilder.group({
          name: [null]
        }),
        this.formBuilder.group({
          name: [null]
        }),
      ])
    });
  }

  get categoreis(): FormArray {
    return this.createForm.get('categories') as FormArray;
  }

}
