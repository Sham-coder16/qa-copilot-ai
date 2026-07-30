import { AppError } from "./AppError.js";

export class ReportNotFoundError extends AppError {
  constructor(path: string) {
    super(`Playwright report not found: ${path}`, 404);
  }
}