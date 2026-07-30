import fs from "fs/promises";
import { logger } from "./logger.js";

import { ReportNotFoundError } from "../errors/ReportNotFoundError.js";
import { InvalidReportError } from "../errors/InvalidReportError.js";

export class FileHelper {

  // Read JSON file
  async readJson<T>(filePath: string): Promise<T> {
    try {
      logger.info(`Reading JSON file: ${filePath}`);

      const file = await fs.readFile(filePath, "utf-8");

      return JSON.parse(file) as T;

    } catch (error) {

      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        throw new ReportNotFoundError(filePath);
      }

      if (error instanceof SyntaxError) {
        throw new InvalidReportError();
      }

      logger.error(`Failed to read JSON file: ${filePath}`, error);

      throw error;
    }
  }

  // Write JSON file
  async writeJson(filePath: string, data: unknown): Promise<void> {
    try {
      await fs.writeFile(
        filePath,
        JSON.stringify(data, null, 2),
        "utf-8"
      );

      logger.success(`JSON file written successfully: ${filePath}`);

    } catch (error) {
      logger.error(`Failed to write JSON file: ${filePath}`, error);
      throw error;
    }
  }

  // Read text file
  async readText(filePath: string): Promise<string> {
    try {
      logger.info(`Reading text file: ${filePath}`);

      return await fs.readFile(filePath, "utf-8");

    } catch (error) {

      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        throw new ReportNotFoundError(filePath);
      }

      logger.error(`Failed to read text file: ${filePath}`, error);

      throw error;
    }
  }

  // Check if file exists
  async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }
}

export const fileHelper = new FileHelper();