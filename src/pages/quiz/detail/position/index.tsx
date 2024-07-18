import {
  Box,
  Flex,
  Grid,
  GridItem,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

import { getApiMatchEvent } from "api";
import {
  ApiMatchEvent,
  ApiMatchEventDetail,
  ApiMatchEventGroup,
} from "api/model";
import { LoseIcon, WinIcon } from "components/Icons";
import Loading from "components/Loading";
import NoData from "components/NoData";
import { RoundedBox } from "components/Styled";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        boxShadow="none"
        color="#A5A5A5"
        fontSize="xs"
        lineHeight="16px"
        py="2"
        px="4"
        w="full"
        _checked={{
          bg: "linear-gradient(180deg, rgba(147, 51, 22, 0.12) 0%, rgba(249, 86, 37, 0.12) 100%)",
          color: "#fff",
          borderBottom: "1px solid #F95625",
          fontWeight: "semibold",
        }}
        _focus={{
          boxShadow: "none",
        }}
        textAlign="center"
      >
        {props.children}
      </Box>
    </Box>
  );
}

function PlayerQuery({
  loading,
  stageTag,
  currentStage,
  onChange,
}: {
  loading: boolean;
  stageTag?: string[];
  currentStage?: string;
  onChange: (value: string) => void;
}) {
  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "framework",
    onChange,
  });

  useEffect(() => {
    if (currentStage) {
      setValue(currentStage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStage]);

  const group = getRootProps();

  if (loading || !stageTag?.length) return <></>;

  return (
    <Box
      w="100vw"
      maxW="428"
      overflow="hidden"
      ml="-4"
      pl="4"
      mt="4"
      bg="rgba(255, 255, 255, 0.05)"
    >
      <Box
        {...group}
        w="100vw"
        maxW="428"
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex
          gap="2"
          fontSize="12px"
          fontWeight="semibold"
          pr="4"
          w="max-content"
        >
          {stageTag?.map((value, index) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} index={index} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}

function PlayerCard({ data }: { data?: ApiMatchEventGroup }) {
  const isEnd = useMemo(
    () => data?.events?.find((item) => item.eventResult === 1),
    [data?.events]
  );
  const currentBg = (item: ApiMatchEventDetail, index: number) => {
    if (item.eventResult === 1 && isEnd) return "rgba(249, 86, 37, 0.2)";
    if (item.eventResult === 0 && isEnd) return "#2F2F2F";
    if (index === 0) return "#3086E9";
    return "#EA4A4B";
  };

  return (
    <Box pb="2">
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
        {data?.group}
      </Box>
      <Grid
        w="full"
        mt="4"
        templateColumns="repeat(2, 1fr)"
        color="white"
        fontSize="xs"
        lineHeight="14px"
        gap="4"
      >
        {data?.events?.map((item, index) => (
          <GridItem
            key={item.eventName}
            bg={currentBg(item, index)}
            rounded="full"
          >
            <Flex
              h="full"
              py="1"
              alignItems="center"
              justifyContent="space-between"
              flexDirection={index === 0 ? "row" : "row-reverse"}
              textAlign={index === 0 ? "left" : "right"}
            >
              <Box px="2.5">{item?.eventName}</Box>
              <Box px="2.5">
                {isEnd ? (
                  item.eventResult === 1 ? (
                    <WinIcon boxSize="3" />
                  ) : (
                    <LoseIcon boxSize="3" />
                  )
                ) : (
                  item.odds
                )}
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

function PointCompare({ data }: { data?: ApiMatchEventGroup }) {
  const isEnd = useMemo(
    () => data?.events?.find((item) => item.eventResult === 1),
    [data?.events]
  );

  return (
    <Box fontSize="xs" lineHeight="14px" pt="4" color="white">
      <Box fontSize="13px" pb="3">
        [{data?.group}]
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        {data?.events?.map((item) => (
          <GridItem key={item.eventName}>
            <RoundedBox
              bg="rgba(255, 255, 255, 0.1)"
              p="2.5"
              h="full"
              sx={{
                "&:before": {
                  display: isEnd && item.eventResult === 1 ? "block" : "none",
                },
              }}
            >
              <Box>{item.eventName}</Box>
              <Box pt="3">
                {isEnd ? (
                  item.eventResult === 1 ? (
                    <WinIcon boxSize="3" />
                  ) : (
                    <LoseIcon boxSize="3" />
                  )
                ) : (
                  item.odds
                )}
              </Box>
            </RoundedBox>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

function PlayerDetail({
  groups,
  loading,
}: {
  groups?: ApiMatchEventGroup[];
  loading: boolean;
}) {
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : !groups?.length ? (
        <NoData />
      ) : (
        groups?.map((item, index) => (
          <Box key={item?.group}>
            {index === 0 ? (
              <PlayerCard data={item} />
            ) : (
              <PointCompare data={item} />
            )}
          </Box>
        ))
      )}
    </Box>
  );
}

export default function Position({ matchId }: { matchId: any }) {
  const [loading, setLoading] = useState(false);
  const [allStage, setAllStage] = useState<ApiMatchEvent>();
  const [stageTag, setStageTag] = useState<string[]>();
  const [currentStage, setCurrentStage] = useState<string>();
  const getMatchEvent = async () => {
    setLoading(true);
    const res = await getApiMatchEvent({ matchId });
    setAllStage(res?.data);
    setStageTag(res?.data?.stageTag);
    setCurrentStage(res?.data?.stageTag?.[0]);
    setLoading(false);
  };

  const currentGroups = useMemo(() => {
    const current = allStage?.stageList?.find(
      (item) => item.stage === currentStage
    );
    return current?.groups;
  }, [currentStage, allStage]);

  const onchange = (value: string) => {
    setCurrentStage(value);
  };

  useEffect(() => {
    getMatchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box color="white" pb="6">
      <PlayerQuery
        loading={loading}
        stageTag={stageTag}
        currentStage={currentStage}
        onChange={onchange}
      />
      <PlayerDetail groups={currentGroups} loading={loading} />
    </Box>
  );
}
