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
import { useParams } from "react-router-dom";

import { userHistoryQuery } from "api";
import { UserHistory } from "api/model";
import Header from "components/Header";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

export default function RootLayout() {
  const { t } = useTranslation();
  const { coin } = useParams();
  const { loading, list } = usePage<UserHistory>(userHistoryQuery, {
    coins: [coin],
  });

  return (
    <Flex flex="1" direction="column">
      <Header title={t("流水")} />
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
                    <Td color={index % 2 !== 0 ? "" : "#F95625"} fontSize="xs">
                      {item.amount} {item.coin}
                    </Td>
                    <Td fontSize="xs">
                      {Number(item.type) === 1 ? t("竞猜押注") : t("竞猜结束")}
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
