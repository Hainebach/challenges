import Link from "next/link";
import { volumes } from "../../resources/lib/data";

import Router from "next/router";
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  return (
    <>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const random = getRandomElement(volumes);
          Router.push(`/volumes/${random.slug}`);
        }}
      >
        Random Volume
      </button>
    </>
  );
}
