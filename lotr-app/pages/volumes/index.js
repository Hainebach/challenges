import Link from "next/link";
import { volumes } from "../../resources /lib/data";

export default function Volumes() {
  return (
    <ul>
      {volumes.map((volume) => (
        <li key={volume.slug}>
          <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
        </li>
      ))}
    </ul>
  );
}
