import React from "react";
import Link from "next/link";
import { volumes } from "@/resources /lib/data";
import VolumePage from "@/resources /lib/VolumePage";

export default function theTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return <VolumePage volume={volume} />;
}
