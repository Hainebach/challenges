import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", On: "false" },
  { id: 2, name: "Kitchen", On: "false" },
  { id: 3, name: "Bedroom", On: "false" },
  { id: 4, name: "Bathroom", On: "false" },
  { id: 5, name: "Garage", On: "false" },
  { id: 6, name: "Porch", On: "false" },
  { id: 7, name: "Garden", On: "false" },
  { id: 8, name: "Office", On: "false" },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightId) {
    const updatedLightArray = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(updatedLightArray);
  }
  return (
    <Layout>
      <GlobalStyle />

      <Component {...pageProps} lights={lights} toggleLight={handleToggle} />
    </Layout>
  );
}
