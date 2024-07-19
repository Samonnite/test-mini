import {
  Box,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import numeral from "numeral";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

import { userFriendQuery, userFriendStat } from "api";
import { UserFriendPage, UserFriendStat } from "api/model";
import Header from "components/Header";
import { CopyIcon } from "components/Icons";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

export default function RootLayout() {
  const { t } = useTranslation();
  const toast = useToast();
  const [detail, setDetail] = useState<UserFriendStat>();
  const { loading, list } = usePage<UserFriendPage>(userFriendQuery);

  const getFriendStat = async () => {
    const res = await userFriendStat();
    setDetail(res.data);
  };

  useEffect(() => {
    getFriendStat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mx="4">
      <Header title={t("邀请好友")} isTransparent />
      <Box
        position="absolute"
        top="0"
        left="0"
        bg="linear-gradient(180deg, rgba(249, 86, 37, 0.1) 0%, rgba(249, 86, 37, 0) 100%);"
        h="268px"
        w="full"
      ></Box>
      <Box color="white" fontSize="sm" pt="6" position="relative">
        <Flex
          align="center"
          justifyContent="space-between"
          border="1px solid rgba(255, 255, 255, 1)"
          px="2.5"
          py="2"
          rounded="lg"
        >
          <Flex alignItems="center">
            <Box minW="20">{t("邀请链接:")}</Box>
            <Box fontWeight="bold" mx="1">{`${
              window.location.host
            }/test-mini/home?ucode=${detail?.ucode || ""}`}</Box>
          </Flex>
          <CopyToClipboard
            text={`${window.location.host}/test-mini/home?ucode=${
              detail?.ucode || ""
            }`}
            onCopy={() =>
              toast({
                description: t("复制成功"),
                duration: 2000,
              })
            }
          >
            <CopyIcon boxSize="4" color="white" />
          </CopyToClipboard>
        </Flex>
        <Flex fontSize="13px" color="white" pt="3" lineHeight="13px">
          <Box
            rounded="lg"
            mr="1.5"
            bg="linear-gradient(140.13deg, rgba(89, 255, 255, 0.2) -101.97%, rgba(60, 46, 209, 0.2) 99.44%);"
            p="2.5"
            flex="1"
            border="1px solid rgba(255, 255, 255, 0.5)"
            position="relative"
          >
            <Box fontWeight="600" pb="5">
              {t("累计邀请人")}
            </Box>
            <Box fontWeight="semibold" fontSize="15px" lineHeight="15px">
              {numeral(detail?.count).format("0,0")}
            </Box>
            <Image
              width="66px"
              height="66px"
              src={"/images/invite-left.png"}
              alt="home"
              position="absolute"
              right="0"
              bottom="0"
            />
          </Box>
          <Box
            flex="1"
            rounded="lg"
            ml="1.5"
            bg="linear-gradient(135deg, rgba(254, 193, 99, 0.2) 0%, rgba(222, 67, 19, 0.2) 100%);"
            p="2.5"
            border="1px solid rgba(255, 255, 255, 0.5)"
            position="relative"
          >
            <Box fontWeight="600" pb="5">
              {t("累计奖励(FP)")}
            </Box>
            <Box fontWeight="semibold" fontSize="15px" lineHeight="15px">
              {numeral(detail?.point).format("0,0[.][000000]")}
            </Box>
            <Image
              width="68px"
              height="68px"
              src={"/images/invite-right.png"}
              alt="home"
              position="absolute"
              right="0"
              bottom="0"
            />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          fontSize="sm"
          lineHeight="14px"
          mt="6"
          position="relative"
          sx={{
            "&::before": {
              content: '" "',
              position: "absolute",
              left: 0,
              top: 0,
              width: "2px",
              height: "14px",
              bg: "#F95625",
            },
          }}
          px="5px"
        >
          <Box>{t("邀请详情")}</Box>
        </Flex>
        <Box mt="4" color="white" fontSize="xs">
          <TableContainer>
            <Table
              variant="unstyled"
              sx={{
                overflow: "hidden",
                borderSpacing: "0",
                borderRadius: "4px",
                borderCollapse: "separate",
                border: "1px solid #777885",
                "table, thead, tbody": {
                  display: "block",
                },
                "thead, tbody tr": {
                  display: "table",
                  width: "100%;",
                  tableLayout: "fixed",
                },
                th: {
                  textAlign: "center",
                  p: 0,
                  whiteSpace: "pre-wrap",
                },
                td: {
                  textAlign: "center",
                  p: 0,
                  whiteSpace: "pre-wrap",
                },
              }}
            >
              <Thead>
                <Tr bg={"rgba(47, 47, 47, 0.8)"} h="9" color="#F95625">
                  <Th
                    borderLeftRadius="base"
                    textAlign="left"
                    borderRight="1px solid #777885"
                  >
                    {t("地址")}
                  </Th>
                  <Th borderRight="1px solid #777885">{t("邀请时间")}</Th>
                  <Th borderRight="1px solid #777885">{t("状态")}</Th>
                  <Th borderTopRightRadius="base">{t("奖励(FP)")}</Th>
                </Tr>
              </Thead>
              <Tbody maxH="420px" overflowY="auto">
                {loading ? (
                  <Tr>
                    <Td colSpan={3}>
                      <Box mb="10">
                        <Loading />
                      </Box>
                    </Td>
                  </Tr>
                ) : !list.length ? (
                  <Tr>
                    <Td colSpan={3}>
                      <Box mt="-20" mb="10">
                        <NoData />
                      </Box>
                    </Td>
                  </Tr>
                ) : (
                  list.map((item, index) => (
                    <Tr
                      key={index}
                      bg={index % 2 !== 0 ? "#2F2F2F" : "#06060D"}
                      h={9}
                    >
                      <Td
                        borderRight="1px solid #777885"
                        borderBottomLeftRadius={
                          index === list.length - 1 ? "base" : "0"
                        }
                      >
                        {item?.faddr}
                      </Td>
                      <Td borderRight="1px solid #777885">
                        {dayjs(Number(item?.createTime)).format("MM-DD HH:mm")}
                      </Td>
                      <Td borderRight="1px solid #777885">
                        {item?.status ? t("已奖励") : t("未奖励")}
                      </Td>
                      <Td
                        borderBottomRightRadius={
                          index === list.length - 1 ? "base" : "0"
                        }
                      >
                        {item?.point}
                      </Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
