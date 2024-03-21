import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightId) {
    const updatedLightArray = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(updatedLightArray);
  }

  function handleLightsOff() {
    console.log("handle lights off was clicked");
    const allLightsOff = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(allLightsOff);
  }

  function handleLightsOn() {
    console.log("handle lights on was clicked");
    const allLightsOn = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(allLightsOn);
  }

  // const lightsOnCounter = lights.reduce((count, light) => {
  //   return light.isOn === true ? count + 1 : count;
  // }, 0);

  const lightsOnCounter = lights.filter((light) => light.isOn === true).length;

  return (
    <Layout>
      <GlobalStyle />

      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        lightsOnCounter={lightsOnCounter}
        handleLightsOff={handleLightsOff}
        handleLightsOn={handleLightsOn}
      />
    </Layout>
  );
}
