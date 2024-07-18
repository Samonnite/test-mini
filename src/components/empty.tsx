import { Box, Flex, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function EmptyPage() {
  const { t } = useTranslation();

  return (
    <Flex alignItems="center" direction="column">
      <Image width="260px" height="260px" src="/images/empty.png" alt="empty" />
      <Box fontSize="sm" color="#EDEDED" fontWeight="semibold">
        {t("此功能暂未开放，敬请期待")}
      </Box>
    </Flex>
  );
}
