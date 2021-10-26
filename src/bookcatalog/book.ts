export interface BookDTO {
    isbn: string;
    title: string;
    authors: string[];
    description: string;

}
export interface Book extends BookDTO {
    slug: string;
}

export interface BookRepository {
    createOrUpdate(book: Book): Promise<void>;
    findOne(isbn: string): Promise<Book | null>;
    findAll(): Promise<Book[]>;
}