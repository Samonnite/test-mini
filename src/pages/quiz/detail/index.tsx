import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import QuizCard from "../components/QuizCard";

// import Analysis from "./analysis";
import Comment from "./comment";
// import Player from "./player";
import Position from "./position";

import { apiGuessDetail } from "api";
import { ApiGuessPage } from "api/model";
import Header from "components/Header";

export default function RootLayout() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [detail, setDetail] = useState<ApiGuessPage>();

  const getGuessDetail = async () => {
    const res = await apiGuessDetail({ id: id as any });
    setDetail(res.data);
  };

  useEffect(() => {
    getGuessDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mx="4">
      <Header title={t("详情页")} />
      <QuizCard item={detail} />
      <Tabs position="static" variant="unstyled" mt="3" isLazy>
        <TabList>
          <Tab
            color="#777885"
            fontWeight="bold"
            fontSize="sm"
            _selected={{ color: "#F95625" }}
            px="0"
            mr="5"
          >
            {t("热议")}
          </Tab>
          <Tab
            color="#F7CD9E"
            fontWeight="bold"
            _selected={{ color: "#F7CD9E" }}
            fontSize="sm"
            px="0"
            mr="5"
          >
            {t("对局分析")}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <Comment id={id} detail={detail} />
          </TabPanel>
          <TabPanel p="0">
            <Position matchId={id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
