import { Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import LanguageCheck from "./LanguageCheck";

import Header from "components/Header";

export default function RootLayout() {
  const { t } = useTranslation();
  return (
    <Flex flex="1" direction="column">
      <Header title={t("语言")} />
      <Box color="white">
        <Box px="3" fontSize="sm">
          <LanguageCheck />
        </Box>
      </Box>
    </Flex>
  );
}
