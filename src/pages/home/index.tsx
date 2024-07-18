import {
  Box,
  Image,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import QueryList from "../quiz/components/QueryList";
import QuizCard from "../quiz/components/QuizCard";

import {
  apiGameQuery,
  apiGuessQuery,
  apiGuessTotal,
  getEnableDataBanner,
} from "api";
import {
  ApiGamePage,
  ApiGuessPage,
  ApiGuessQueryStatusItem,
  DataBanner,
  GameMatchTotal,
  PageSort,
} from "api/model";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

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
  const [totalList, setTotalList] = useState<GameMatchTotal[]>([]);
  const { loading, list, reset } = usePage<ApiGuessPage>(apiGuessQuery, {
    gid,
    status,
    sortList,
  });

  const getTotalList = async () => {
    const res = await apiGuessTotal({
      status,
    });
    setTotalList(res?.data || []);
  };

  const onChange = (value?: number) => {
    if (gid === value) return;
    setGid(value);
    reset({ gid: value });
  };

  useEffect(() => {
    getTotalList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <QueryList list={gameList} totalList={totalList} onChange={onChange} />
      {loading ? (
        <Loading />
      ) : !list.length ? (
        <NoData />
      ) : (
        list.map((item, index) => {
          return (
            <Link
              key={index}
              as={RouterLink}
              to={`/quiz/${item.id}`}
              textDecoration="none"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box px="1">
                <QuizCard item={item} />
              </Box>
            </Link>
          );
        })
      )}
    </>
  );
};

export default function Home() {
  const { t } = useTranslation();
  const defaultGames: ApiGamePage[] = [
    {
      name: "All",
      id: undefined,
      mates: undefined,
    },
  ];
  const [gameList, setGameList] = useState<ApiGamePage[]>();
  const [bannerList, setBannerList] = useState<DataBanner[]>([]);

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

  const getBannerList = async () => {
    const res = await getEnableDataBanner();
    setBannerList(res.data || []);
  };

  useEffect(() => {
    getBannerList();
    getGameList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pb="10" position="relative">
      <Image
        src="/images/home/home-mask.png"
        width="200px"
        height="285px"
        position="absolute"
        right="-3"
        top="-90px"
        alt="mask"
        pointerEvents="none"
        zIndex="999999"
      />
      {bannerList?.length > 0 ? (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {bannerList?.map((item) => (
            <SwiperSlide key={item?.id}>
              <Image
                width="100%"
                height="120px"
                alt="banner"
                src={item?.imgUrl}
                onClick={() => {
                  if (!item?.jumpUrl) return;
                  window.location.href = item?.jumpUrl;
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <></>
      )}
      <Tabs position="relative" variant="unstyled">
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
            {t("进行中")}
          </Tab>
          <Tab
            fontSize="sm"
            lineHeight="18px"
            color="#777885"
            fontWeight="bold"
            _selected={{ color: "white" }}
            px="0"
          >
            {t("已结束")}
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
          <TabPanel px="0" pt="3">
            <ProcessList
              status={["settlement", "completed"]}
              gameList={gameList}
              sortList={[
                {
                  field: "status",
                  type: "asc",
                },
                {
                  field: "dueTime",
                  type: "desc",
                },
              ]}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
