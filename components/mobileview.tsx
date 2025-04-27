import { PassportData, PassportEvent } from "@/types/passport";
import React, { useEffect, useState } from "react";
import MapView from "./map/mapview";
import EventGrid from "./grid/eventgrid";

interface MobileViewProps {
  events: PassportData;
}

export default function MobileView({ events }: MobileViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<PassportEvent | null>(
    null
  );
  const [tab, setTab] = useState<string>("table");

  useEffect(() => {
    if (tab === "map") {
      setSelectedEvent(null);
    }
  }, [tab]);
  return (
    <div className="relative flex grow flex-col">
      <div className="absolute h-full w-full grow flex bg-surface-surface-container-highest/20/30">
        <MapView
          events={events}
          onSelectEvent={setSelectedEvent}
          selectedEvent={selectedEvent}
        />
      </div>
      <div
        className={`absolute w-full sm:hidden pointer-events-none ${
          tab === "table" ? "hidden" : "block"
        }`}
        style={{
          background:
            "linear-gradient(rgb(0, 41, 77) 0%, rgba(0, 41, 77, 0.85) 36.06%, rgba(0, 41, 77, 0.8) 83.34%, rgba(0, 41, 77, 0) 100%)",
          height: "344px",
        }}
      ></div>

      <div
        className="z-2 flex grow text-surface-on-surface-variant-bright pointer-events-none sm:!bg-transparent"
        style={{
          background: tab === "table" ? "rgb(0, 41, 77)" : undefined,
        }}
      >
        <div className="flex w-full justify-between gap-12 min-h-screen">
          <div className="relative ml-0 hidden w-full h-fit pointer-events-auto self-start rounded-2xl sm:sticky sm:block pointer sm:ml-4 sm:max-w-[416px] sm:w-[30%] sm:pb-4 sm:pt-20"></div>
          <EventGrid
            events={events}
            selectedEvent={selectedEvent}
            onSelectEvent={setSelectedEvent}
            onTab={setTab}
            selectedTab={tab}
          />
        </div>
      </div>
    </div>
  );
}
