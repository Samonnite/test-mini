import {
  Box,
  Flex,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { t } from "i18next";
import { useEffect, useState } from "react";

import QueryList from "../quiz/components/QueryList";
import QuizCard from "../quiz/components/QuizCard";

import { apiGameQuery, apiGuessQuery } from "api";
import {
  ApiGamePage,
  ApiGuessPage,
  ApiGuessQueryStatusItem,
  PageSort,
} from "api/model";
import Header from "components/Header";
import { AddIcon } from "components/Icons";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

const ProcessList = ({
  status,
  gameList,
  sortList,
}: {
  status: ApiGuessQueryStatusItem[];
  gameList?: ApiGamePage[];
  sortList?: PageSort[];
}) => {
  const [gid, setGid] = useState<number>();
  const { loading, list, reset } = usePage<ApiGuessPage>(apiGuessQuery, {
    gid,
    status,
    sortList,
  });

  const onChange = (value?: number) => {
    if (gid === value) return;
    setGid(value);
    reset({ gid: value });
  };

  return (
    <Box overflow="hidden">
      <QueryList list={gameList} onChange={onChange} />
      {loading ? (
        <Loading />
      ) : !list.length ? (
        <NoData />
      ) : (
        list.map((item, index) => {
          return (
            <QuizCard
              key={index}
              item={item}
              share={false}
              isManage
              onRefresh={() => reset({ gid })}
            />
          );
        })
      )}
    </Box>
  );
};

export default function Manage() {
  const defaultGames: ApiGamePage[] = [
    {
      name: "All",
      id: undefined,
      mates: undefined,
    },
  ];
  const [gameList, setGameList] = useState<ApiGamePage[]>();

  const getGameList = async () => {
    const res = await apiGameQuery({
      pageNum: 1,
      pageSize: 100,
      sortList: [
        {
          field: "rank",
          type: "desc",
        },
      ],
    });
    setGameList(defaultGames.concat(res?.data || []));
  };

  useEffect(() => {
    getGameList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex flex="1" direction="column" h="100%">
      <Header
        title={t("竞猜管理")}
        extra={
          <Link href="/manage/edit">
            <AddIcon boxSize="6" />
          </Link>
        }
        mx="0"
      />
      <Tabs position="relative" variant="unstyled" mx="4">
        <TabList>
          <Tab
            fontSize="sm"
            lineHeight="18px"
            color="#777885"
            fontWeight="bold"
            _selected={{ color: "white" }}
            px="0"
            mr="3"
          >
            {t("已发布")}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px="0" pt="3">
            <ProcessList
              status={["betting", "process"]}
              gameList={gameList}
              sortList={[
                {
                  field: "status",
                  type: "asc",
                },
                {
                  field: "dueTime",
                  type: "asc",
                },
              ]}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
