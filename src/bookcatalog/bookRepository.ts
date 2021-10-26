import {Db} from "mongodb";
import {Book, BookRepository} from "./book";

export const bookRepositoryFactory = (db: Db): BookRepository => {
  const books = db.collection("books");
  return {
    async createOrUpdate(book) {
      // const books = await booksPromise;
      await books.updateOne(
        { isbn: book.isbn },
        { $set: book },
        { upsert: true }
      );
    },
    async findOne(isbn) {
      // const books = await booksPromise;
      return books.findOne({ isbn }, { projection: { _id: 0 } });
    },
    async findAll() {
      // const books = await booksPromise;
      return books.find({}, { projection: { _id: false } }).toArray();
    },
  };
};
