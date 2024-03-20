import React from "react";
import { volumes } from "/resources/lib/data.js";
import VolumePage from "/resources/lib/VolumePage";
import { useRouter } from "next/router";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const volume = volumes.find((volume) => slug === volume.slug);
  console.log(volume);
  if (!volume) {
    return <div>Volume not found</div>;
  }

  return <VolumePage volume={volume} />;
}
