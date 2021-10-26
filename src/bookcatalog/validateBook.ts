import Joi from "joi";
import { z } from "zod";

// const authorSchema = Joi.string().required().min(1).max(50);

// const schema = Joi.object({
//   title: Joi.string().trim().required().min(1).max(100),
//   authors: Joi.array().items(authorSchema).required().min(1).max(10),
//   description: Joi.string().allow("").max(5000),
//   isbn: Joi.string().required().uppercase().length(10),
// });
const BookSchema = z.object({
  title: z.string().min(1).max(100),
  authors: z.array(z.string().min(1).max(50)).min(1).max(10),
  description: z.optional(z.string().max(5000)),
  isbn: z.string().length(10)
});
export type BookDTO = z.infer<typeof BookSchema>;

export function validateBook(book: unknown) {
  return BookSchema.safeParse(book);
  // const result = schema.validate(book, {
  //   allowUnknown: false,
  //   convert: true,
  //   abortEarly: false,
  // });
  // return result.error ? result.error.details : null;
  // return result.error ? Maybe.Just(result.error.details) : Maybe.None();
}
