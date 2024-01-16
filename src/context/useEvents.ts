import { useContext } from "react";
import { EventsContext } from "../context";

export const EVENT_COLORS = ["red", "green", "blue"] as const;

export function useEvents() {
  const value = useContext(EventsContext);
  if (value == null) {
    throw new Error("useEvents must be used within an EventsProvider");
  }

  return value;
}
