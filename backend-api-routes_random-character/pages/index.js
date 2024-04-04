import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);

  const character = data;
  console.log("data: ", character);
  if (error) return <h1>error</h1>;
  if (!data) return <h1>no data</h1>;
  if (isLoading) return <h1>...loading</h1>;

  return (
    <>
      <h1>
        Hello {character.prefix} {character.lastName}!
      </h1>
      <h2>your information:</h2>
      <ul>
        <li>
          full name: {character.firstName} {character.lastName}
        </li>
        <li>address: {character.address}</li>
        <li>phone number: {character.phoneNumber}</li>
        <li>birthday: {character.birthday}</li>
      </ul>
    </>
  );
}
