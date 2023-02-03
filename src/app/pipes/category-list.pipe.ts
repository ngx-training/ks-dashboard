import { Pipe, PipeTransform } from '@angular/core';
import { BookCategory } from '../services/book-categories/book-category';

@Pipe({
  name: 'categoryList',
  pure: true
})
export class CategoryListPipe implements PipeTransform {

  transform(books: BookCategory[], separator: string): string {
    if (books?.length !== 0) {
      const displayNames = books.map(book => book.displayName);
      return displayNames.join(separator);
    } else {
      return '';
    }
  }

}
