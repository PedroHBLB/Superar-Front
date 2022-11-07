import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/esm/locale";

interface Token {
  lessThanXSeconds: string;

  xSeconds: string;

  halfAMinute: string;

  lessThanXMinutes: string;

  xMinutes: string;

  aboutXHours: string;

  xHours: string;

  xDays: string;

  aboutXMonths: string;

  xMonths: string;

  aboutXYears: string;

  xYears: string;

  overXYears: string;

  almostXYears: string;
}

function calculateTime(date: string) {
  const oldDate = new Date(date);
  const dateFormatted = formatDistanceToNow(oldDate, {
    locale: ptBR,
    addSuffix: true,
  });

  return dateFormatted;
}

export { calculateTime };
