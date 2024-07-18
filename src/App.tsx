import { Box, ChakraProvider, Container, theme } from "@chakra-ui/react";
import { useLocalStorageState } from "ahooks";
import { useEffect } from "react";

// routes
import Layout from "./Layout";
import { FuneverRouter } from "./router";

import { getApiConfig } from "api";
import { ApiConf } from "api/model";
import { Wallet } from "components/wallet";

import "./globals.css";
// eslint-disable-next-line import/order
import Iframe from "./Iframe";

export const App = () => {
  const [config, setConfig] = useLocalStorageState<ApiConf>("config-block");
  const getConfig = async () => {
    const res = await getApiConfig();
    setConfig(res.data);
  };
  useEffect(() => {
    getConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!config) {
    return (
      <ChakraProvider theme={theme}>
        <Iframe></Iframe>
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider theme={theme}>
      <Iframe>
        <Wallet config={config}>
          <Layout config={config}>
            <FuneverRouter />
          </Layout>
        </Wallet>
      </Iframe>
    </ChakraProvider>
  );
};
