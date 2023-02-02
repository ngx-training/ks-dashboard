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

    this.createForm.valueChanges.subscribe(value => {
      console.log('valueChanges', value);
    });

    this.createForm.statusChanges.subscribe(status => {
      console.log('statusChanges', status);
    });

    this.createForm.get('title')?.removeValidators(Validators.required);

    const oldBookd = {
      title: 'Test Old Book',
      author: 'Gregor Doroschenko',
      genre: 'Comedy',
      isAvailable: false
    };

    // Hier müssen die Werte für alle FormControl gestzt werden
    // this.createForm.setValue(oldBookd);

    // Hier werden die Werte partiell gesetzt.
    this.createForm.patchValue(oldBookd);
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
          name: ['TT']
        }),
      ])
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
