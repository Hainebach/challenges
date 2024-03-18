import Link from "next/link";
import { introduction } from "../resources /lib/data";

import Volumes from "./volumes";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <Link href="/volumes">Volumes</Link>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <Volumes />
    </div>
  );
}
