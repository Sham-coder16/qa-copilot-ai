export function successResponse(text: string) {
  return {
    content: [
      {
        type: "text",
        text,
      },
    ],
  };
}

export function errorResponse(error: unknown) {
  return {
    content: [
      {
        type: "text",
        text:
          error instanceof Error
            ? error.message
            : "Unknown error occurred.",
      },
    ],
  };
}