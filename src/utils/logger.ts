export const logger = {

  info(message: string) {

    console.error(
      `[INFO] ${message}`
    );

  },


  success(message: string) {

    console.error(
      `[SUCCESS] ${message}`
    );

  },


  error(
    message: string,
    error?: unknown
  ) {

    console.error(
      `[ERROR] ${message}`,
      error
    );

  },


  warn(message: string) {

    console.error(
      `[WARN] ${message}`
    );

  }

};