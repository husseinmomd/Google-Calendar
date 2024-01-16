export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;

export const EVENTS_COLOR = ["red", "green", "blue"] as const;

export type Event = {
  id: string;
  name: string;
  color: (typeof EVENTS_COLOR)[number];
  date: Date;
} & (
  | { allDay: false; startTime: string; endTime: string }
  | { allDay: true; startTime?: never; endTime?: never }
);
