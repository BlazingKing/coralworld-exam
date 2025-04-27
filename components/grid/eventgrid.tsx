"use client";

import { PassportData, PassportEvent } from "@/types/passport";
import Image from "next/image";

interface EventGridProps {
  events: PassportData;
  selectedEvent: PassportEvent | null;
  onSelectEvent: (event: PassportEvent) => void;
  onTab?: (tab: string) => void;
  selectedTab?: string;
}

export default function EventGrid({
  events,
  selectedEvent,
  onSelectEvent,
  onTab,
  selectedTab,
}: EventGridProps) {
  return (
    <div
      className={`flex w-full flex-col p-4 pt-20 sm:p-6 sm:pt-20 sm:w-[32%] sm:max-w-[448px] ${
        selectedTab === "table" ? "" : "max-sm:!bg-transparent"
      }`}
      style={{ backgroundColor: "rgb(0, 41, 77)" }}
    >
      <div className="flex w-full flex-col gap-2 rounded-t-2xl bg-[hsla(0,0%,100%,.2)] p-4 pointer-events-auto cursor-pointer pb-2 rounded-b-none sm:rounded-b-2xl">
        <div className="flex w-fit items-center justify-center gap-2 max-w-full">
          <Image
            src={events.passport.partner.profile_image}
            alt={events.passport.partner.display_name}
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
          />
          <span className="text-base font-semibold whitespace-nowrap truncate  block">
            {events.passport.partner.display_name}
          </span>
        </div>
        <div className="flex flex-row ga-4 justify-between">
          <h1 className="text-base font-semibold text-wrap break-words">
            {events.passport.name}
          </h1>
          <div className="flex items-center gap-4">
            <div className=" h-[36px] text-[#41dfad] text-base font-semibold">
              0/{events.passport.events.length}
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm text-wrap break-words">
            {events.passport.description}
          </p>
        </div>
      </div>
      <div className="flex typography-typescale-title-small justify-around sm:hidden bg-[hsla(0,0%,100%,.2)] gap-4 mt-[1px] pointer-events-auto">
        <div
          onClick={() => onTab?.("table")}
          className={`flex items-center gap-1 cursor-pointer w-full p-2 justify-center ${
            selectedTab === "table" ? "border-b-2 border-white" : ""
          }`}
        >
          <span>ตาราง</span>
        </div>
        <div
          onClick={() => onTab?.("map")}
          className={`flex items-center gap-1 cursor-pointer w-full p-2 justify-center ${
            selectedTab === "map" ? "border-b-2 border-white" : ""
          }`}
        >
          <span>แผนที่</span>
        </div>
      </div>
      {selectedTab === "table" && (
        <div className="pointer-events-auto mt-6 grid grid-cols-4 gap-2">
          {events.passport.events.map((event) => (
            <div
              key={event.id}
              className={`relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl box-content ${
                selectedEvent?.id === event.id
                  ? "border-2 border-white rounded-lg"
                  : ""
              }`}
              onClick={() => onSelectEvent(event)}
            >
              <Image
                src={event.image_url}
                alt={`Event ${event.id}`}
                className="w-full h-[94px] object-cover opacity-50"
                width={94}
                height={94}
              />
            </div>
          ))}
        </div>
      )}
      <div className="hidden pt-6 mt-auto mx-auto text-center sm:block">
        <span className="text-sm font-semibold">
          แตะที่ของสะสมหรือหมุดบนแผนที่เพื่อแสดงข้อมูล
        </span>
      </div>
    </div>
  );
}
