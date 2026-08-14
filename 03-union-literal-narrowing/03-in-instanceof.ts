function getContactInfo(
  notification:
    | { email: string; subject: string }
    | { chatId: number; text: string },
): string {
  if ("email" in notification) {
    return `Email: ${notification.email}, тема: ${notification.subject}`;
  }

  return `Chat ${notification.chatId}: ${notification.text}`;
}

function describeEvent(eventDate: Date | string | number): string {
  if (typeof eventDate === "string") {
    return eventDate.trim();
  }

  if (typeof eventDate === "number") {
    const dateObject = new Date(eventDate);
    return dateObject.toISOString();
  }

  return eventDate.toISOString();
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "Неизвестная ошибка";
}

getErrorMessage(new Error("Сеть недоступна"));
getErrorMessage("Текстовая ошибка");
getErrorMessage(42);
getErrorMessage(null);
