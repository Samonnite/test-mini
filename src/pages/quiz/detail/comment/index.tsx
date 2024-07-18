import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import numeral from "numeral";
import { useTranslation } from "react-i18next";

import RemarkInput from "./input";

import { guessCommentQuery } from "api";
import { ApiGuessCommentPage } from "api/model";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

export default function Comment({ id, detail }: any) {
  const { t } = useTranslation();
  const { loading, list, total, reset } = usePage<ApiGuessCommentPage>(
    guessCommentQuery,
    {
      gsid: id as any,
    }
  );
  return (
    <>
      <Box color="white" fontSize="sm">
        <Box
          rounded="base"
          bg="rgba(255, 255, 255, 0.1)"
          overflow="hidden"
          mt="4"
          p="3"
          mb="24"
        >
          <Box pb="4">{detail?.title}</Box>
          <Box color="#A5A5A5" fontSize="2xs" py="2">
            {numeral(total).format("0,0")} {t("人已参与")}
          </Box>
          {loading ? (
            <Loading />
          ) : !list.length ? (
            <Box mt="-24" mb="24">
              <NoData />
            </Box>
          ) : (
            list.map((item, index) => (
              <Box key={index} borderTop="0.5px solid #404040" pt="3" pb="4">
                <Flex alignItems="flex-start">
                  <Avatar src={item?.fromLogo} boxSize="6" mr="2" />
                  <Box flex="1">
                    <Box as={"span"}>
                      <Text color="#3086E9" pr="2" as={"span"}>
                        {item?.fromName}:
                      </Text>
                      <Text as={"span"}>{item?.remark}</Text>
                    </Box>
                    <Box color="#A5A5A5" fontSize="xs" pt="2">
                      {dayjs(Number(item?.createTime)).format(
                        "YYYY-MM-DD HH:mm"
                      )}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            ))
          )}
        </Box>
      </Box>
      <RemarkInput gsid={id as any} reset={reset} />
    </>
  );
}
