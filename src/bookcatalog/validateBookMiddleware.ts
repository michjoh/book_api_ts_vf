import {RequestHandler} from "express";
import { validateBook } from "./validateBook";

export const validate: RequestHandler = (req, res, next) => {
  const validateErrors = validateBook(req.body);

  if (validateErrors) {
    const error = new Error();
    // @ts-ignore
    error.message = validateErrors;
    // @ts-ignore
    error.status = 400;
    next(error);
  } else {
    next();
  }
};
