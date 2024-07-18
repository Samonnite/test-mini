import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import { queryUserPointHistory } from "api";
import { UserPointHistory } from "api/model";
import Header from "components/Header";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

export default function RootLayout() {
  const { t } = useTranslation();
  const { loading, list } = usePage<UserPointHistory>(queryUserPointHistory);

  const pointTypeText: Record<string, string> = {
    register: t("注册"),
    login: t("今日登录"),
    post: t("今日发帖"),
    invite: t("邀请好友"),
    stake: t("参与竞猜"),
  };

  return (
    <Flex flex="1" direction="column">
      <Header title={t("积分记录")} />
      <Box m="3" color="white">
        <TableContainer>
          <Table
            variant="unstyled"
            size="sm"
            sx={{
              borderSpacing: "0",
              border: "1px solid #777885",
              td: {
                whiteSpace: "pre-wrap",
              },
            }}
          >
            <Tbody>
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
                  <Tr key={index} bg={index % 2 !== 0 ? "" : "#2F2F2F"} h="9">
                    <Td fontSize="xs">
                      {dayjs(Number(item?.createTime)).format("MM-DD HH:mm")}
                    </Td>
                    <Td fontSize="xs">{item.point}FP</Td>
                    <Td fontSize="xs" textAlign="right">
                      {pointTypeText[
                        item?.type as keyof typeof pointTypeText
                      ] || item?.type}
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
}
