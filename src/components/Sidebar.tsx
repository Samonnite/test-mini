import {
  Box,
  Flex,
  Grid,
  Image,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { WalletMask } from "./wallet";

import { useLayoutContext } from "Layout";

const SideNavbar = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const { pathname } = useLocation();

  const { token } = useLayoutContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const guardLogin = (e: any) => {
    if (!token) {
      e.preventDefault();
      return onOpen();
    }
  };
  const routers = useMemo(
    () => [
      {
        title: t("竞猜"),
        path: "/home",
        icon: (
          <Image
            alt="funever"
            src="/images/tabbar/tabbar-jc-normal.png"
            width="44px"
            height="44px"
            objectFit="contain"
          />
        ),
        activeIcon: (
          <Image
            alt="funever"
            src="/images/tabbar/tabbar-jc-active.png"
            width="44px"
            height="44px"
            objectFit="contain"
          />
        ),
        isGuard: false,
      },
      {
        title: t("统计"),
        path: "/home/stat",
        icon: (
          <Image
            alt="funever"
            src="/images/tabbar/tabbar-tj-normal.png"
            width="44px"
            height="44px"
            objectFit="contain"
          />
        ),
        activeIcon: (
          <Image
            alt="funever"
            src="/images/tabbar/tabbar-tj-active.png"
            width="44px"
            height="44px"
            objectFit="contain"
          />
        ),
        isGuard: false,
      },
      {
        title: t("我的"),
        path: "/mine",
        icon: (
          <Image
            alt="funever"
            src="/images/tabbar/tabbar-mine-normal.png"
            width="44px"
            height="44px"
            objectFit="contain"
          />
        ),
        activeIcon: (
          <Image
            alt="funever"
            src="/images/tabbar/tabbar-mine-active.png"
            width="44px"
            height="44px"
            objectFit="contain"
          />
        ),
        isGuard: true,
      },
    ],
    [t]
  );
  return (
    <>
      <Flex
        h="100vh"
        bg="#191919"
        pt="5"
        direction="column"
        alignItems="center"
        px="10"
        position="sticky"
        top="0"
        display={{
          base: "none",
          md: "none",
        }}
      >
        <Link to="/">
          <Image
            alt="funever"
            src="/images/logo.png"
            width="60"
            height="60"
            objectFit="contain"
          />
        </Link>
        <Box h="4" w="full"></Box>
        {routers.map((router, index) => {
          const isCurrRoute = pathname === router.path;
          return (
            <Link
              to={router.path}
              key={index}
              onClick={(e) => {
                if (!router.path) {
                  console.log(111);

                  e.preventDefault();
                  toast({
                    description: t("暂未开放"),
                    duration: 2000,
                  });
                }
              }}
            >
              <Flex
                w="110px"
                h="90px"
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                {isCurrRoute ? router.activeIcon : router.icon}
                <Box
                  color={isCurrRoute ? "#F95625" : "#A5A5A5"}
                  fontSize="sm"
                  fontWeight="semibold"
                  mt="1"
                  textAlign="center"
                >
                  {router.title}
                </Box>
              </Flex>
            </Link>
          );
        })}
      </Flex>
      <Grid
        w="full"
        maxW="428"
        left="50%"
        transform="translateX(-50%)"
        bg="#191919"
        py="4"
        alignItems="center"
        px="2"
        position="absolute"
        bottom="0"
        display={{
          base: "grid",
          md: "grid",
        }}
        zIndex="20"
        templateColumns="repeat(3, 1fr)"
        boxShadow="0px -1px 0px 0px #1A1A1A"
      >
        {routers.map((router, index) => {
          const isCurrRoute = pathname === router.path;
          return (
            <Link
              to={router.path}
              key={index}
              onClick={(e) => {
                if (!router.path) {
                  e.preventDefault();
                  toast({
                    description: t("暂未开放"),
                    duration: 2000,
                  });
                }
                if (router.isGuard) {
                  guardLogin(e);
                }
              }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                {isCurrRoute ? router.activeIcon : router.icon}
                <Box
                  color={isCurrRoute ? "#F95625" : "#A5A5A5"}
                  fontSize="xs"
                  mt="1.5"
                  textAlign="center"
                >
                  {router.title.split(" ")[0]}
                </Box>
              </Flex>
            </Link>
          );
        })}
      </Grid>
      <WalletMask isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default SideNavbar;
