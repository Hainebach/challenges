import React from "react";
import Link from "next/link";
import { volumes } from "@/resources /lib/data";

export default function VolumePage({ volume }) {
  return (
    <>
      <Link href="/">All Volumes</Link>;<h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        <h3>books:</h3>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}
            {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}
