import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { queryApiGuessStakePage } from "api";
import { ApiGuessStakePage } from "api/model";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

function AnalysisCard() {
  return (
    <Grid
      bg="linear-gradient(
        to right,
        #3086E9 0%,
        #3086E9 49.8%,
        transparent 49.8%,
        transparent 50%,
        #EA4A4B 50%,
        #EA4A4B 100%
      )"
      rounded="xl"
      w="full"
      p="1.5"
      templateColumns="repeat(5, 1fr)"
    >
      <GridItem
        colSpan={2}
        fontWeight="bold"
        display="flex"
        flexDirection="column"
      >
        <Flex
          bg="#033A7A"
          rounded="20px"
          display="inline-flex"
          alignItems="center"
          overflow="hidden"
          width="max-content"
        >
          <Image
            alt="funever"
            src="/images/default-logo.png"
            width="6"
            height="6"
            objectFit="contain"
            rounded="full"
          />
          <Box px="2.5">IG</Box>
        </Flex>
        <Center color="#F7CD9E" fontSize="20px" lineHeight="20px" pt="1.5">
          70%
        </Center>
        <Flex
          ml="2.5"
          fontSize="xs"
          alignItems="center"
          pt="3"
          lineHeight="12px"
        >
          <Box>70 WIN</Box>
          <Box pl="2.5">30 LOSE</Box>
        </Flex>
      </GridItem>
      <GridItem colSpan={1} textAlign="center">
        <CircularProgress
          value={30}
          color="white"
          thickness="22px"
          capIsRound
          size="60px"
          trackColor="rgba(255, 255, 255, 0.2)"
          sx={{
            svg: {
              circle: {
                r: "38",
                strokeDashoffset: "-99",
              },
            },
          }}
        >
          <CircularProgressLabel
            fontStyle="italic"
            fontSize="16px"
            fontWeight="600"
          >
            VS
          </CircularProgressLabel>
        </CircularProgress>
        <Box fontSize="2xs" pt="1">
          胜率
        </Box>
      </GridItem>
      <GridItem
        colSpan={2}
        fontWeight="bold"
        textAlign="right"
        display="flex"
        flexDirection="column"
      >
        <Flex
          bg="#A40F10"
          rounded="20px"
          display="inline-flex"
          alignItems="center"
          overflow="hidden"
          alignSelf="flex-end"
          width="max-content"
        >
          <Box px="2.5">TL</Box>
          <Image
            alt="funever"
            src="/images/default-logo.png"
            width="6"
            height="6"
            objectFit="contain"
            rounded="full"
          />
        </Flex>
        <Center color="#F7CD9E" fontSize="20px" lineHeight="20px" pt="1.5">
          30%
        </Center>
        <Flex
          ml="2.5"
          fontSize="xs"
          alignItems="center"
          pt="3"
          lineHeight="12px"
        >
          <Box>70 WIN</Box>
          <Box pl="2.5">30 LOSE</Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

function HistoryTable() {
  const { loading, list } = usePage<ApiGuessStakePage>(queryApiGuessStakePage, {
    gsid: 26,
  });
  return (
    <>
      <Box
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
        历史交锋
      </Box>
      <Box mt="3" color="white" fontSize="11px">
        <TableContainer>
          <Table
            variant="unstyled"
            size="11px"
            sx={{
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
                whiteSpace: "pre-wrap",
              },
              td: {
                textAlign: "center",
                whiteSpace: "pre-wrap",
              },
            }}
          >
            <Thead>
              <Tr bg={"#2F2F2F"} h="8" color="#777885">
                <Th
                  borderLeftRadius="base"
                  textAlign="left"
                  borderRight="1px solid"
                  w="100px"
                >
                  赛事
                </Th>
                <Th borderRight="1px solid" w="20">
                  时间
                </Th>
                <Th borderRight="1px solid">击杀</Th>
                <Th borderRight="1px solid">时长</Th>
                <Th borderRightRadius="base">胜方</Th>
              </Tr>
            </Thead>
            <Tbody maxH="300px" overflowY="auto">
              {loading ? (
                <Tr>
                  <Td colSpan={5}>
                    <Box mb="10">
                      <Loading />
                    </Box>
                  </Td>
                </Tr>
              ) : !list.length ? (
                <Tr>
                  <Td colSpan={5}>
                    <Box mt="-20" mb="10">
                      <NoData />
                    </Box>
                  </Td>
                </Tr>
              ) : (
                list.map((item, index) => (
                  <Tr key={index} bg={index % 2 !== 0 ? "#2F2F2F" : ""} h={12}>
                    <Td
                      borderLeftRadius="base"
                      borderRight="1px solid #777885"
                      fontSize="2xs"
                      lineHeight="16px"
                      w="100px"
                    >
                      <Flex justifyContent="center">
                        <Box width="74px" whiteSpace="pre-wrap">
                          2024LDL发展联 赛第二阶段
                        </Box>
                      </Flex>
                    </Td>
                    <Td borderRight="1px solid #777885" w="20">
                      <Flex justifyContent="center">
                        <Box width="62px" whiteSpace="pre-wrap" fontSize="2xs">
                          2024-05-16 25-7
                        </Box>
                      </Flex>
                    </Td>
                    <Td borderRight="1px solid #777885">25-7</Td>
                    <Td borderRight="1px solid #777885">35m32s</Td>
                    <Td borderRightRadius="base">IG</Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

function PointCompare() {
  const aWidth = `${Math.random() + 10}%`;
  const bWidth = `${100 - Math.random() - 10}%`;
  const isZero = false;
  return (
    <Box fontSize="xs" lineHeight="12px" pb="5">
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={1}>30%</GridItem>
        <GridItem colSpan={1} textAlign="center">
          一血率
        </GridItem>
        <GridItem colSpan={1} textAlign="right">
          70%
        </GridItem>
      </Grid>
      <Flex justifyContent="center" alignItems="center" pt="3" gap="1">
        {aWidth !== "0%" && (
          <Box
            bg={isZero ? "#A5A5A5" : "#3086E9"}
            h="1.5"
            w={aWidth}
            rounded="full"
            position="relative"
            sx={{
              "&::after": {
                position: "absolute",
                content: "''",
                right: "-3px",
                width: "10px",
                height: "100%",
                borderRadius: "2px",
                borderStartRadius: bWidth !== "0%" ? "full" : "2px",
                background: isZero ? "#A5A5A5" : "#3086E9",
                zIndex: "0",
              },
            }}
          ></Box>
        )}
        {bWidth !== "0%" && (
          <Box
            bg={isZero ? "#A5A5A5" : "#EA4A4B"}
            h="1.5"
            w={bWidth}
            rounded="full"
            position="relative"
            sx={{
              "&::after": {
                position: "absolute",
                content: "''",
                left: "-3px",
                width: "10px",
                height: "100%",
                borderRadius: "2px",
                borderEndRadius: aWidth !== "0%" ? "full" : "2px",
                background: isZero ? "#A5A5A5" : "#EA4A4B",
                zIndex: "0",
              },
            }}
          ></Box>
        )}
      </Flex>
    </Box>
  );
}

function AllData() {
  return (
    <>
      <Box
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
        总交锋数据
      </Box>
      <Box
        rounded="md"
        bg="#2F2F2F"
        overflow="hidden"
        position="relative"
        p="5"
        pb="0"
        mt="3"
      >
        <PointCompare />
        <PointCompare />
        <PointCompare />
      </Box>
    </>
  );
}

function AllRate() {
  return (
    <>
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
        <Box>事件触发胜率</Box>
        <Box color="#777885" fontSize="xs">
          统计战队近五十场比赛数据
        </Box>
      </Flex>
      <Box
        rounded="md"
        bg="#2F2F2F"
        overflow="hidden"
        position="relative"
        p="5"
        pb="0"
        mt="3"
      >
        <PointCompare />
        <PointCompare />
        <PointCompare />
      </Box>
    </>
  );
}

export default function Analysis() {
  return (
    <Box color="white" fontSize="sm" mt="2" pb="6">
      <AnalysisCard />
      <HistoryTable />
      <AllData />
      <AllRate />
    </Box>
  );
}
