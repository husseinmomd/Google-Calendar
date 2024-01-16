import { Calendar } from "./components";
import { EventsProvider } from "./context";

export function App() {
  return (
    <EventsProvider>
      <Calendar />
    </EventsProvider>
  );
}
