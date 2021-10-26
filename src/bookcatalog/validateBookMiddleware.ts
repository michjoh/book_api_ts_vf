import {RequestHandler} from "express";
import { validateBook } from "./validateBook";
import {StatusError} from "../error";

export const validate: RequestHandler = (req, res, next) => {
  const validateErrors = validateBook(req.body);

  if (validateErrors) {
    const error = new StatusError(validateErrors, 400);
    next(error);
  } else {
    next();
  }
};
