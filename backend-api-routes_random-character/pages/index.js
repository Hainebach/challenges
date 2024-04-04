import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  return <h1>Hello from Next.js!</h1>;
}
