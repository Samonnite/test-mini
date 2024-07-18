import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Header from "components/Header";

export default function RootLayout() {
  const { t } = useTranslation();
  return (
    <Flex flex="1" direction="column">
      <Header title={t("关于我们")} />
      <Box color="white" as={Center} pt="7">
        <Image alt="funever" src="/images/logo.png" width="125" height="125" />
      </Box>
      <Box pt="24" mx="3" pb="6" borderBottom="1px solid #2F2F2F" fontSize="md">
        <Box fontWeight="semibold" color="white">
          {t("平台简介")}
        </Box>
        <Box lineHeight="22px" color="#777885" pt="4">
          <Box pb="4">
            {t("欢迎来到Funever —— 顶级Web3游戏和电子竞技聚合平台")}
          </Box>
          <Box pb="4">
            {t(
              "体验下一代游戏的新高度，Funever是您的AI驱动门户，帮助您发现、玩耍并在激动人心的Web3游戏和电子竞技世界中赚取收益。加入我们的社区，享受以下功能："
            )}
          </Box>
          <Box pb="4">
            <Box pb="1">
              {t("AIGC GameFi社区：与其他游戏玩家建立联系并共同成长。")}
            </Box>
            <Box pb="1">
              {t("智能任务系统：参与专为您的游戏风格量身定制的挑战。")}
            </Box>
            <Box pb="1">{t("玩家角色设定：打造您独特的数字身份。")}</Box>
            <Box pb="1">{t("AI代理服务：在每一步获得智能支持。")}</Box>
            <Box pb="1">
              {t(
                "电子竞技资讯：获取最新的电子竞技信息，并通过战略洞察最大化您的收益。"
              )}
            </Box>
          </Box>
          <Box>{t("立即深入Funever，释放您的游戏潜力！")}</Box>
        </Box>
      </Box>
    </Flex>
  );
}
