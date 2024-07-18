import { useState } from "react";
import reactLogo from "./assets/react.svg";
import twaLogo from "./assets/tapps.png";
import viteLogo from "/vite.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab
            fontSize="sm"
            lineHeight="18px"
            color="#777885"
            fontWeight="bold"
            _selected={{ color: "white" }}
            px="0"
            mr="3"
          >
            进行中
          </Tab>
          <Tab
            fontSize="sm"
            lineHeight="18px"
            color="#777885"
            fontWeight="bold"
            _selected={{ color: "white" }}
            px="0"
          >
            已结束
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px="0" pt="3">
            1
          </TabPanel>
          <TabPanel px="0" pt="3">
            2
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div>
        <a href="https://ton.org/dev" target="_blank">
          <img src={twaLogo} className="logo" alt="TWA logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TWA + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/*  */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
    </>
  );
}

export default App;
