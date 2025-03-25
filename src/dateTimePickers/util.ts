import { Dayjs } from "dayjs";

export type DateTime = Dayjs | null;
export type SetDateTime = (v: DateTime) => void;