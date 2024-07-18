import {
  Avatar,
  Box,
  Flex,
  Grid,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import numeral from "numeral";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useLayoutContext } from "Layout";
import { getUserPoint } from "api";
import { UserPoint } from "api/model";
import { SideNavbar } from "components";
import {
  FansIcon,
  FPPointIcon,
  InviteIcon,
  PostIcon,
  QuizIcon,
  QuizManageIcon,
  ReplayIcon,
  RightIcon,
  SettingIcon,
  SubscribeIcon,
} from "components/Icons";
import { RoundedBox } from "components/Styled";

export default function RootLayout() {
  const { t } = useTranslation();
  const toast = useToast();
  const { userInfo, coinList, account, token } = useLayoutContext();
  const [point, setPoint] = useState<UserPoint>();

  const getPoint = async () => {
    const res = await getUserPoint();
    setPoint(res?.data);
  };

  useEffect(() => {
    if (token) {
      getPoint();
    }
  }, [token]);

  const coinBalanceList = useMemo(() => {
    return coinList?.map((item) => {
      return {
        ...item,
        balance: item.mint
          ? account?.allBalance?.[item?.mint] || 0
          : account?.allBalance?.SOL || 0,
      };
    });
  }, [account?.allBalance, coinList]);

  return (
    <Flex flex="1" direction="column" py="10" pb="28">
      <SideNavbar />
      <Box color="white" position="relative" zIndex="9" flex="1">
        <Box
          position="absolute"
          top="-10"
          left="0"
          bg="url('/images/mine-bg.png')"
          h="223px"
          w="100vw"
          maxWidth="428px"
          bgSize="cover"
          bgRepeat="no-repeat"
          pointerEvents="none"
        ></Box>
        <Flex px="4" justifyContent="space-between">
          <Flex>
            <Avatar
              src={userInfo?.logo}
              boxSize="12"
              mr="3"
              border={userInfo?.logo ? "" : "0.5px solid #A5A5A5"}
              as="span"
            />
            <Box fontSize="lg" fontWeight="semibold">
              {userInfo?.name}
            </Box>
          </Flex>
          <Link to="/mine/setting">
            <Flex
              rounded="full"
              bg="rgba(255, 255, 255, 0.2)"
              h="8"
              w="8"
              justifyContent="center"
              alignItems="center"
            >
              <SettingIcon boxSize="6" />
            </Flex>
          </Link>
        </Flex>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap="12"
          fontSize="sm"
          py="2.5"
          mt="7"
          mx="6"
          whiteSpace="nowrap"
        >
          <Box textAlign="center" as={Link} to="/mine/quiz">
            <QuizIcon boxSize="8" />
            <Box pt="2">{t("我的竞猜")}</Box>
          </Box>
          <Box
            textAlign="center"
            onClick={() =>
              toast({
                description: t("暂未开放"),
                duration: 2000,
              })
            }
          >
            <SubscribeIcon boxSize="8" />
            <Box pt="2">{t("我的订阅")}</Box>
          </Box>
          <Box
            textAlign="center"
            onClick={() =>
              toast({
                description: t("暂未开放"),
                duration: 2000,
              })
            }
          >
            <PostIcon boxSize="8" />
            <Box pt="2">{t("我的帖子")}</Box>
          </Box>
        </Grid>
        <Box
          pb="2"
          ml="3"
          lineHeight="14px"
          mt="6"
          fontSize="sm"
          position="relative"
          display="inline-block"
          fontWeight="semibold"
          sx={{
            "&::before": {
              content: '" "',
              position: "absolute",
              left: "1px",
              bottom: 1.5,
              width: "100%",
              height: "1",
              bg: "linear-gradient(90deg, #F95625 0%, rgba(249, 86, 37, 0) 100%)",
            },
          }}
        >
          {t("我的资产")}
        </Box>
        <RoundedBox
          bg="rgba(47, 47, 47, 0.5)"
          m="3"
          fontSize="sm"
          px="3"
          py="2.5"
        >
          {coinBalanceList?.map((item) => (
            <Flex
              key={item?.coin}
              h="12"
              justifyContent="space-between"
              alignItems="center"
              as={Link}
              to={`/mine/flow/${item?.coin}`}
            >
              <Flex>
                <Image
                  width="6"
                  height="6"
                  src={item?.logo}
                  alt="home"
                  rounded="full"
                />
                <Box fontSize="md" pl="3" fontWeight="semibold">
                  {numeral(item?.balance).format("0,0[.][000000]")}
                </Box>
              </Flex>
              <Flex color="#A5A5A5">
                {item?.coin}
                <RightIcon boxSize="3.5" ml="2" mt="1" color="#777885" />
              </Flex>
            </Flex>
          ))}
        </RoundedBox>
        <Box bg="rgba(26, 26, 26, 0.5)" w="full" roundedTop="lg" mt="6">
          <Box
            pb="2"
            ml="3"
            lineHeight="14px"
            mt="6"
            fontSize="sm"
            position="relative"
            display="inline-block"
            fontWeight="semibold"
            sx={{
              "&::before": {
                content: '" "',
                position: "absolute",
                left: "1px",
                bottom: 1.5,
                width: "100%",
                height: "1",
                bg: "linear-gradient(90deg, #F95625 0%, rgba(249, 86, 37, 0) 100%)",
              },
            }}
          >
            {t("我的积分")}
          </Box>
          <RoundedBox
            m="3"
            p="3"
            mt="4"
            fontSize="sm"
            sx={{
              "&::before": {
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%) !important",
              },
            }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              as={Link}
              to="/mine/point"
            >
              <Flex alignItems="center">
                <FPPointIcon boxSize="6" />
                <Text
                  fontSize="sm"
                  fontWeight="normal"
                  ml="2.5"
                  lineHeight="14px"
                  color="#CCCCCC"
                >
                  FP
                </Text>
              </Flex>
              <Flex alignItems="flex-start">
                <Text fontSize="md" fontWeight="semibold" lineHeight="20px">
                  {numeral(point?.point).format("0,0")}
                </Text>
                <RightIcon boxSize="3.5" ml="2" mt="1" color="white" />
              </Flex>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              px="2"
              py="3.5"
              lineHeight="12px"
              mt="3.5"
            >
              <Box fontSize="xs">{t("累计获得FP")}</Box>
              <Box fontSize="md" fontWeight="semibold">
                {numeral(point?.pointSum).format("0,0")}
              </Box>
            </Flex>
            <Box
              my="3.5"
              h="0.5px"
              bg="linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)"
            />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              px="2"
              py="3.5"
              lineHeight="12px"
              mt="3.5"
            >
              <Box fontSize="xs">{t("累计兑换FABA")}</Box>
              <Box fontSize="md" fontWeight="semibold">
                {numeral(point?.tokenSum).format("0,0")}
              </Box>
            </Flex>
          </RoundedBox>
          <Box px="3" rounded="lg" m="3" mt="4" fontSize="sm">
            <Flex
              h="60px"
              justifyContent="space-between"
              alignItems="center"
              as={Link}
              to="/mine/invite"
            >
              <Flex>
                <InviteIcon boxSize="6" />
                <Box pl="3">{t("邀请好友")}</Box>
              </Flex>
              <RightIcon boxSize="5" ml="2" color="#777885" />
            </Flex>
            {userInfo?.type === "admin" && (
              <Flex
                h="60px"
                justifyContent="space-between"
                alignItems="center"
                as={Link}
                to="/manage"
              >
                <Flex>
                  <QuizManageIcon boxSize="6" />
                  <Box pl="3" color="#F95625">
                    {t("管理竞猜")}
                  </Box>
                </Flex>
                <RightIcon boxSize="5" ml="2" color="#777885" />
              </Flex>
            )}
            <Flex
              h="60px"
              justifyContent="space-between"
              alignItems="center"
              onClick={() =>
                toast({
                  description: t("暂未开放"),
                  duration: 2000,
                })
              }
            >
              <Flex>
                <ReplayIcon boxSize="6" />
                <Box pl="3">{t("我的回复")}</Box>
              </Flex>
              <RightIcon boxSize="5" ml="2" color="#777885" />
            </Flex>
            <Flex
              h="60px"
              justifyContent="space-between"
              alignItems="center"
              onClick={() =>
                toast({
                  description: t("暂未开放"),
                  duration: 2000,
                })
              }
            >
              <Flex>
                <FansIcon boxSize="6" />
                <Box pl="3">{t("我的粉丝")}</Box>
              </Flex>
              <RightIcon boxSize="5" ml="2" color="#777885" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
