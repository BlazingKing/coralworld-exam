"use client";
import { PassportData } from "@/types/passport";
import { useQuery } from "@tanstack/react-query";

async function fetchPassport(): Promise<PassportData> {
  const res = await fetch("/api/passport");
  if (!res.ok) throw new Error("Failed to fetch passport data");
  return res.json();
}

export default function usePassportData() {
  return useQuery<PassportData>({
    queryKey: ["passport"],
    queryFn: fetchPassport,
  });
}
