"use client";
import React, { useState } from "react";
import MapView from "./map/mapview";
import EventModal from "./modal/eventmodal";
import EventGrid from "./grid/eventgrid";
import { PassportData, PassportEvent } from "@/types/passport";

interface DesktopViewProps {
  events: PassportData;
}

export default function DesktopView({ events }: DesktopViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<PassportEvent | null>(
    null
  );
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
        className="absolute w-full sm:hidden pointer-events-none hidden"
        style={{
          backgroundColor:
            "linear-gradient(rgb(0, 41, 77) 0%, rgba(0, 41, 77, 0.85) 36.06%, rgba(0, 41, 77, 0.8) 83.34%, rgba(0, 41, 77, 0) 100%)",
          height: "344px",
        }}
      ></div>

      <div
        className="z-2 flex grow text-surface-on-surface-variant-bright pointer-events-none sm:!bg-transparent"
        style={{ backgroundColor: "rgb(0, 41, 77)" }}
      >
        <div className="flex w-full justify-between gap-12 min-h-screen">
          <div className="relative ml-0 hidden w-full h-fit pointer-events-auto self-start rounded-2xl sm:sticky sm:block pointer sm:ml-4 sm:max-w-[416px] sm:w-[30%] sm:pb-4 sm:pt-20">
            <EventModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          </div>
          <EventGrid
            events={events}
            selectedEvent={selectedEvent}
            onSelectEvent={setSelectedEvent}
            selectedTab="table"
          />
        </div>
      </div>
    </div>
  );
}
