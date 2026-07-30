import { AppError } from "./AppError.js";

export class AIConnectionError extends AppError {
  constructor() {
    super("Unable to connect to AI service.", 500);
  }
}