import {Book, BookRepository} from "./book";

export const bookRepositoryFactory = (): BookRepository => {
  const books: Record<Book['isbn'], Book> = {};
  return {
    async findAll() {
      return Object.values(books);
    },
    async createOrUpdate(book) {
      books[book.isbn] = book;
    },
    async findOne(isbn) {
      return books[isbn];
    }
  };
};
