"use client";

import { PassportEvent } from "@/types/passport";
import Image from "next/image";

interface EventModalProps {
  event: PassportEvent | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;
  return (
    <div className="relative bg-[#01294d] flex flex-col items-center rounded-2xl px-6 py-16 overflow-auto h-fit max-full-height min-h-[25rem] sm:max-h-[calc(100vh-6rem)]">
      <div className="mx-auto flex w-full grow flex-col sm:max-w-sm overflow-auto h-fit max-h-full">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-2 hidden cursor-pointer sm:block bg-[#345672] rounded-full w-[33px] h-[33px]"
        >
          X
        </button>
        <div className="px-4 pb-4 sm:pb-0">
          <Image
            src={event.image_url}
            alt={`Event ${event.id}`}
            className="w-full h-auto"
            width={336}
            height={336}
          />
        </div>
      </div>
    </div>
  );
}
