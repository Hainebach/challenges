console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("bad request");
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// (async () => {
//   const data = await fetchData();
//   console.log(data.results[2]);
// })();

const data = await fetchData();
console.log(data.results[0].eye_color);
console.log(data.results[4].eye_color);
console.log(
  `name: ${data.results[5].name}, skin color: ${data.results[5]["skin_color"]}`
);
