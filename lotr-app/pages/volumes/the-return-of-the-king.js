import React from "react";
import Link from "next/link";
import { volumes } from "@/resources /lib/data";
import VolumePage from "@/resources /lib/VolumePage";

export default function theReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return <VolumePage volume={volume} />;
}
