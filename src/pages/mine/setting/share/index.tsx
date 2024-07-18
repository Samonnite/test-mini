import { Avatar, Box, Center, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

// import GenerateImage from "./GenerateImage";
import Qrcode from "./QrCode";

import { useLayoutContext } from "Layout";
import Header from "components/Header";

export const ShareBox = () => {
  const { userInfo } = useLayoutContext();
  const { t } = useTranslation();
  return (
    <Box fontSize="sm" id="box-share">
      <Center fontSize="xl" fontWeight="semibold">
        {t("分享链接得高额收益！")}
      </Center>
      <Flex
        direction="column"
        alignItems="center"
        bgImage="url(/images/share/share-bg.png)"
        bgSize="contain"
        bgRepeat="no-repeat"
        mt="5"
        pt="150%"
        position="relative"
      >
        <Box position="absolute" bottom="12%" w="full">
          <Flex
            px="6"
            pr="9"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Flex alignItems="center">
                <Avatar
                  name="coin"
                  src="/images/default-logo.png"
                  boxSize="10"
                  mr="4"
                />
                <Box fontSize="sm" color="white">
                  {userInfo?.name}
                </Box>
              </Flex>
              <Box pt="2.5" color="#A5A5A5" fontSize="xs" lineHeight="13px">
                {t("扫码打开链接即可登录游玩")}
              </Box>
            </Box>
            <Qrcode />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default function RootLayout() {
  return (
    <Flex flex="1" direction="column">
      <Header />
      <Box color="white" mx="9">
        <ShareBox />
        {/* <GenerateImage /> */}
      </Box>
    </Flex>
  );
}
