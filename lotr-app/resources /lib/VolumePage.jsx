import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function VolumePage({ volume }) {
  return (
    <>
      <Link href="/">All Volumes</Link>
      <h1>{volume.title}</h1>
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
      <Image src={volume.cover} alt={volume.title} width={144} height={230} />
    </>
  );
}
