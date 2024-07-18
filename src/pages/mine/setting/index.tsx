import { Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Header from "components/Header";
import { RightIcon } from "components/Icons";

export default function RootLayout() {
  const { t } = useTranslation();
  const list = [
    {
      href: "/mine/setting/language",
      name: t("语言切换"),
    },
    {
      href: "/mine/setting/share",
      name: t("分享H5"),
    },
    {
      href: "/mine/setting/about",
      name: t("关于"),
    },
  ];
  return (
    <Flex flex="1" direction="column">
      <Header title={t("设置")} />
      <Box color="white">
        <Box px="3" fontSize="sm">
          {list.map((item) => (
            <Flex
              key={item.href}
              as={Link}
              to={item.href}
              h="60px"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid #2F2F2F"
            >
              <Box>{item.name}</Box>
              <RightIcon boxSize="5" ml="2" color="#777885" />
            </Flex>
          ))}
        </Box>
      </Box>
    </Flex>
  );
}
