import {RequestHandler} from "express";
import { validateBook } from "./validateBook";
import {StatusError} from "../error";

export const validate: RequestHandler = (req, res, next) => {
  const result = validateBook(req.body);

  if (!result.success) {
    const error = new StatusError(result.error, 400);
    next(error);
  } else {
    const x = result.data;
    x.a
    next();
  }
};
