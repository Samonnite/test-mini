import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import { CopyLinkIcon } from "../Icons";

export default function Share({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isPc] = useMediaQuery("(min-width: 576px)");
  const { t } = useTranslation();
  const toast = useToast();
  return (
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay
        backdropFilter="blur(3px)"
        sx={
          isPc
            ? {
                maxWidth: 428,
                maxH: 844,
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }
            : {}
        }
      />
      <DrawerContent
        bg="#000000"
        color="white"
        sx={
          isPc
            ? {
                position: "absolute",
                maxWidth: "428px !important",
                maxH: 844,
                left: "calc((100vw - 428px) / 2) !important",
                bottom: "calc((100vh - 844px) / 2) !important",
              }
            : {}
        }
      >
        <DrawerCloseButton />
        <DrawerHeader fontSize="md">{t("分享")}</DrawerHeader>
        <DrawerBody>
          <Grid templateColumns="repeat(3, 1fr)" gap="10" fontSize="sm">
            <Box textAlign="center">
              <TwitterShareButton url={window?.location.host}>
                <TwitterIcon size={44} round />
              </TwitterShareButton>
              <Box pt="2">Twitter</Box>
            </Box>
            <Box textAlign="center">
              <TelegramShareButton url={window?.location.host}>
                <TelegramIcon size={44} round />
              </TelegramShareButton>
              <Box pt="2">Telegram</Box>
            </Box>
            <Box textAlign="center">
              <CopyToClipboard
                text={window?.location.host}
                onCopy={() =>
                  toast({
                    description: t("复制成功"),
                    duration: 2000,
                  })
                }
              >
                <CopyLinkIcon boxSize="44px" />
              </CopyToClipboard>
              <Box pt="2">Copy link</Box>
            </Box>
          </Grid>
        </DrawerBody>
        <DrawerFooter justifyContent="center" onClick={onClose}>
          <Box>
            <Box
              h="1"
              bg="#2F2F2F"
              w="full"
              mt="1"
              position="absolute"
              left="0"
            ></Box>
            <Box h="10" pt="3" mt="2.5">
              {t("取消")}
            </Box>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
