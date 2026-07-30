import { AppError } from "./AppError.js";

export class InvalidReportError extends AppError {
  constructor() {
    super("Invalid Playwright Report JSON.", 400);
  }
}