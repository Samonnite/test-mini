import { Box, Flex } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { ApiGamePage, GameMatchTotal } from "api/model";

const QueryList = ({
  list = [],
  totalList = [],
  onChange,
}: {
  list?: ApiGamePage[];
  totalList?: GameMatchTotal[];
  onChange: (value?: number) => void;
}) => {
  const [active, setActive] = useState<number>();

  const handleChange = (value?: number) => {
    setActive(value);
    onChange(value);
  };

  const currentList = useMemo(() => {
    const res = list?.map((item) => {
      const current = totalList?.find((ele) => ele?.gid === item?.id);
      return {
        ...item,
        count: current?.count || 0,
      };
    });
    return res;
  }, [list, totalList]);

  const allTotal = useMemo(() => {
    return totalList?.reduce((pre, cur) => pre + (cur?.count || 0), 0);
  }, [totalList]);

  return (
    <Box
      w="100vw"
      maxW="428"
      ml="-3"
      pl="3"
      position="relative"
      sx={{
        "&::before": {
          content: '" "',
          position: "absolute",
          right: 0,
          width: 6,
          height: "full",
          bg: "linear-gradient(86.08deg, rgba(13, 13, 13, 0) 2.56%, #0D0D0D 96.18%)",
        },
      }}
    >
      <ScrollContainer>
        <Flex
          gap="2"
          fontSize="12px"
          fontWeight="semibold"
          pr="4"
          w="max-content"
          bg="rgba(255, 255, 255, 0.05)"
        >
          {currentList.map((item, index) => (
            <Box
              key={item.name}
              py="2"
              px="4"
              bg={
                active === item.id
                  ? "linear-gradient(180deg, rgba(147, 51, 22, 0.12) 0%, rgba(249, 86, 37, 0.12) 100%)"
                  : ""
              }
              cursor="pointer"
              color={active === item.id ? "#fff" : "#A5A5A5"}
              fontWeight={active === item.id ? "semibold" : "nromal"}
              borderBottom={active === item.id ? "1px solid #F95625" : ""}
              whiteSpace="nowrap"
              lineHeight="15px"
              onClick={() => handleChange(item.id)}
            >
              {item.name}({index === 0 ? allTotal : item?.count})
            </Box>
          ))}
        </Flex>
      </ScrollContainer>
    </Box>
  );
};
export default QueryList;
