import useSWR from "swr";
import { useRouter } from "next/router";

import React from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);

  console.log("data: ", data);
  if (isLoading) {
    return <h1>...loading</h1>;
  } else if (error) {
    return <h1>error</h1>;
  } else {
    return (
      <>
        <h2>{data.name}</h2>
        <h4>description: {data.description}</h4>
        <h4>
          price:
          {data.currency}
          {data.price}
        </h4>
        <h4>category: {data.category}</h4>
      </>
    );
  }
}
