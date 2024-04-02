import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher);
  console.log("data: ", data);

  if (isLoading) {
    return <h1>...loading</h1>;
  } else if (error) {
    return <h1>error</h1>;
  } else {
    return (
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <h5>category: {product.category}</h5>
            <h5>description: {product.description}</h5>
            <h5>
              price: {product.currency}
              {product.price}
            </h5>
          </li>
        ))}
      </ul>
    );
  }
}
