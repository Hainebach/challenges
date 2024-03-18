import React from "react";
import Link from "next/link";
import { volumes } from "@/resources /lib/data";
import VolumePage from "@/resources /lib/VolumePage";

export default function theFellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return <VolumePage volume={volume} />;
}
