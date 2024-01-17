import lightFormat from "date-fns/lightFormat";

export const formattedTime = (date: Date, time?: string) => {
  return `${lightFormat(date, "yyyy-MM-dd")} ${time}`;
};
